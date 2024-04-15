// Displays the projects from the projects.json file dynamically
function displayProjects() {
  fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
      const projectsContainer = document.getElementById('projects');
      projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('grid-item');

        let title = project.url ? `<a href="${project.url}" class="title">${project.title}</a>` : `<div class="title">${project.title}</div>`;
        const description = `<p>${project.description}</p>`;

        let media = `<img class="center" loading="lazy" src="${project.image}"
                      alt="${project.title}" onerror="this.style.display='none'"/>`;

        let video = '';
        if (project.video) {
          video = `<a href="${project.video}" class="video-link">Watch video</a>`;
        }

        projectDiv.innerHTML = `${title}${description}${media}`;
        projectsContainer.appendChild(projectDiv);
      });
    })
    .catch(error => console.error('Error loading projects:', error));
}

displayProjects();