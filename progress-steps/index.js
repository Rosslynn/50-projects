const steps = [
  {
    text: '1',
  },
  {
    text: '2',
  },
  {
    text: '3',
  },
  {
    text: '4',
  },
];

const progressContainer = document.querySelector('#progress-container');
const progressContainerProgressBar = document.querySelector('#progress-container-progress-bar');
const stepsLength = steps.length;
let currentActive = 1;

steps.forEach((step, index) => {
  const progressContainerStep = document.createElement('div');
  progressContainerStep.append(step.text);
  progressContainerStep.classList.add('progress-container__step');
  progressContainerStep.classList.add(`progress-container__step-${index + 1}`);

  if ((index + 1)  <= currentActive) {
    progressContainerStep.classList.add('active');
  }

  progressContainer.appendChild(progressContainerStep);
});

const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

nextButton.addEventListener('click', () => {
  if (currentActive === stepsLength) return;
  currentActive++;
  if (currentActive > 1) prevButton.removeAttribute('disabled');
  const DOMStep = document.querySelector(`.progress-container__step-${currentActive}`);
  DOMStep.classList.add('active');
  progressContainerProgressBar.style.width = `${ ((currentActive - 1) * 100) / (stepsLength - 1)  }%`;
  if (currentActive === stepsLength) nextButton.setAttribute('disabled', 'true');
});

prevButton.addEventListener('click', () => {
  if (currentActive === 1) return;
  if (currentActive <= stepsLength) nextButton.removeAttribute('disabled');
  const DOMStep = document.querySelector(`.progress-container__step-${currentActive}`);
  DOMStep.classList.remove('active');
  currentActive--;
  progressContainerProgressBar.style.width = `${ ((currentActive - 1) * 100) / (stepsLength - 1)  }%`

  if (currentActive === 1) prevButton.setAttribute('disabled', 'true');
  
});