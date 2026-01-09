import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.0.0/+esm';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    alert(`Thank you for your message, ${name}! We'll get back to you at ${email} soon.`);
    form.reset();
}

function backToHome() {
    window.location.hash = '#home';
}

async function loadServiceProjects(serviceName) {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('service', serviceName)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error loading projects:', error);
        return [];
    }

    return data || [];
}

function renderServiceDetail(serviceName) {
    const mainContent = document.querySelectorAll('section, #service-detail');
    mainContent.forEach(el => el.style.display = 'none');

    const serviceDetail = document.getElementById('service-detail');
    const header = document.querySelector('header');

    serviceDetail.style.display = 'block';
    header.style.display = 'block';

    document.getElementById('service-title').textContent = decodeURIComponent(serviceName);

    loadServiceProjects(decodeURIComponent(serviceName)).then(projects => {
        const grid = document.getElementById('service-projects-grid');
        grid.innerHTML = '';

        if (projects.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #6b7280;">No projects available for this service yet.</p>';
            return;
        }

        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <img src="${project.image_url}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    });
}

function renderHome() {
    const mainContent = document.querySelectorAll('section, #service-detail');
    mainContent.forEach(el => el.style.display = '');

    document.getElementById('service-detail').style.display = 'none';
}

function handleRouting() {
    const hash = window.location.hash;

    if (hash.startsWith('#service/')) {
        const serviceName = hash.replace('#service/', '');
        renderServiceDetail(serviceName);
    } else {
        renderHome();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    handleRouting();

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href.startsWith('#service/')) {
                e.preventDefault();
                renderHome();
                const targetId = href;
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    window.addEventListener('hashchange', handleRouting);
});
