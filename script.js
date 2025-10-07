document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const projectName = event.target.getAttribute('data-project');
        
        const projectDisplay = document.getElementById('project-display');
        
        if (projectName === 'project1') {
            projectDisplay.innerHTML = `
                <section class="hero">
                    <h1>Project 1</h1>
                    <p>Description of the first project.</p>
                </section>
            `;
        } else if (projectName === 'project2') {
            projectDisplay.innerHTML = `
                <section class="hero">
                    <h1>Project 2</h1>
                    <p>Description of the second project.</p>
                </section>
            `;
        } else if (projectName === 'project3') {
            projectDisplay.innerHTML = `
                <section class="hero">
                    <h1>Project 3</h1>
                    <p>Description of the third project.</p>
                </section>
            `;
        }
    });
});
