// Displays the projects from the projects.json file dynamically
async function displayProjects() {
  try {
    const response = await fetch('projects.json');
    const projects = await response.json();
    const projectsContainer = document.getElementById('projects');
    let htmlContent = '';

    projects.forEach(project => {
      const description = `<p>${project.description}</p>`;
      let media = `<img class="center" loading="lazy" src="${project.image}" alt="${project.title}" onerror="this.src='fallback-image.jpg'; this.onerror=null;">`;
      let video = project.video ? `<a href="${project.video}" class="video-link">Watch Video</a>` : '';

      htmlContent += `
        <div class='grid-item'>
          <a href="${project.url}" class="main-link">
            <div class="title">${project.title}</div>
            ${description}${media}
          </a>
          ${video !== '' ? `<div class="video-link-container">${video}</div>` : ''}
        </div>
      `;
    });

    projectsContainer.innerHTML = htmlContent;
  } catch (error) {
    console.error('Error loading projects:', error);
    document.getElementById('projects').innerHTML = '<p>Error loading projects.</p>';
  }
}

// Displays images from the ruby.json file dynamically
async function loadImages() {
  try {
    const response = await fetch('ruby.json');
    const pictures = await response.json();
    const picturesContainer = document.querySelector('.pictures');
    let htmlContent = '';

    pictures.forEach(image => {
      htmlContent += `
        <div class='picture'>
          <img class='film-image' src='${image.src}' alt='Photo of Ruby'
               onerror="this.src='fallback-image.jpg'; this.onerror=null;">
          <div class="image-caption">${image.caption}</div>
        </div>
      `;
    });

    picturesContainer.innerHTML = htmlContent;
  } catch (error) {
    console.error('Error loading pictures:', error);
    document.querySelector('.pictures').innerHTML = '<p>Error loading images.</p>';
  }
}

window.onload = function() {
  displayProjects();
  loadImages();
};