:root {
    --primary: #1f2937;
    --secondary: #0f766e;
    --accent: #0d9488;
    --light: #f3f4f6;
    --white: #ffffff;
    --text: #1f2937;
    --text-light: #6b7280;
    --border: #e5e7eb;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    color: var(--text);
    line-height: 1.6;
    background-color: var(--white);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

header {
    background-color: var(--white);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar {
    padding: 1rem 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--secondary);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--accent);
}

.hero {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: var(--white);
    padding: 120px 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 600px;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 800;
}

.hero-content p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.95;
}

.cta-button {
    display: inline-block;
    background-color: var(--accent);
    color: var(--white);
    padding: 12px 32px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid var(--accent);
}

.cta-button:hover {
    background-color: transparent;
    transform: translateY(-2px);
}

section {
    padding: 80px 20px;
}

section h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--primary);
}

.services {
    background-color: var(--light);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.service-card {
    background-color: var(--white);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    display: block;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.service-card img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}

.service-card h3 {
    padding: 1.5rem 1.5rem 0.5rem;
    color: var(--secondary);
    font-size: 1.25rem;
}

.service-card p {
    padding: 0 1.5rem 1.5rem;
    color: var(--text-light);
    font-size: 0.95rem;
}

.projects {
    background-color: var(--white);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    background-color: var(--white);
}

.project-card:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.project-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
}

.project-info {
    padding: 1.5rem;
}

.project-info h3 {
    color: var(--secondary);
    margin-bottom: 0.5rem;
}

.project-info p {
    color: var(--text-light);
    font-size: 0.95rem;
}

.about {
    background-color: var(--light);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-text {
    color: var(--text);
}

.about-text p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    color: var(--text-light);
}

.about-list {
    list-style: none;
    margin-top: 2rem;
}

.about-list li {
    padding: 0.75rem 0;
    padding-left: 2rem;
    position: relative;
    color: var(--text);
}

.about-list li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: bold;
    font-size: 1.2rem;
}

.about-content img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.contact {
    background-color: var(--white);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 2rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.info-item h3 {
    color: var(--secondary);
    margin-bottom: 0.5rem;
}

.info-item p {
    color: var(--text-light);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-form input,
.contact-form textarea {
    padding: 12px 16px;
    border: 1px solid var(--border);
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
    color: var(--text);
    transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
}

.submit-button {
    background-color: var(--accent);
    color: var(--white);
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-button:hover {
    background-color: var(--secondary);
    transform: translateY(-2px);
}

.footer {
    background-color: var(--primary);
    color: var(--white);
    padding: 2rem 20px;
    text-align: center;
}

@media (max-width: 768px) {
    .nav-links {
        gap: 1rem;
        font-size: 0.9rem;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    section h2 {
        font-size: 2rem;
    }

    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
    }

    .services-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }
}

.service-detail-page {
    background-color: var(--light);
    min-height: 100vh;
}

.service-detail-header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: var(--white);
    padding: 40px 20px;
    text-align: center;
    position: relative;
}

.back-button {
    position: absolute;
    left: 20px;
    top: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--white);
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.back-button:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

.service-detail-header h2 {
    color: var(--white);
    margin-bottom: 0;
}

.service-detail-page .container {
    padding-top: 60px;
    padding-bottom: 60px;
}

@media (max-width: 480px) {
    .navbar .container {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-links {
        flex-direction: column;
        gap: 0.5rem;
    }

    .logo {
        font-size: 1.25rem;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    section {
        padding: 40px 20px;
    }

    section h2 {
        font-size: 1.75rem;
    }

    .back-button {
        position: absolute;
        left: 10px;
        top: 20px;
        padding: 6px 12px;
        font-size: 0.9rem;
    }
}
/* Logo Styling */
.logo {
    display: flex;
    align-items: center;
}

.logo img {
    height: 80px; /* Adjust this size as needed */
    width: auto;
    object-fit: contain;
}

/* If you want to make it bigger on larger screens */
@media (min-width: 768px) {
    .logo img {
        height: 120px;
    }
}

/* Make sure the navbar container is flexbox */
.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}
