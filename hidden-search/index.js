const buttonSearch = document.querySelector('#button-search');
const inputSearch = document.querySelector('#input-search');

buttonSearch.addEventListener('click', () => {
  inputSearch.classList.toggle('input-active');
});