const images =  [
  {
    title: 'explore the world',
    url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    active: true,
  },
  {
    title: 'wild forest',
    url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'sunny beach',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
  },
  {
    title: 'city on water',
    url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
  },
  {
    title: 'mountains - clouds',
    url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
];

// Add images to the DOM
const imagesContainer = document.querySelector('#images-container');

for (const image of images) {
  // Create the image container
  const containerSingleImage = document.createElement('div');
  containerSingleImage.style.backgroundImage = `url(${image.url})`;
  containerSingleImage.classList.add('images-container__image');
  if (image.active) containerSingleImage.classList.add('active');

  // Create the title
  const title = document.createElement('h4');
  title.append(image.title);

  // Create the logic when image container is clicked
  containerSingleImage.addEventListener('click', () => {
    if (containerSingleImage.classList.contains('active')) return;
    const activeElement = document.querySelector('.active');
    if (activeElement) activeElement.classList.remove('active');
    containerSingleImage.classList.add('active');
  });

  // Add elements to the DOM
  containerSingleImage.appendChild(title);
  imagesContainer.appendChild(containerSingleImage);
}