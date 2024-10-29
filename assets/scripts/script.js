function handleMouseEnter() {
  this.classList.add('s-card--hovered');

  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');

  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  const controllerButtons = document.getElementsByClassName('s-controller__button');
  
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }

  for (let index = 0; index < controllerButtons.length; index++) {
    const button = controllerButtons[index];

    button.addEventListener('click', () => selectCarouselItem(button));
  }
}

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  const activeButtonElement = document.querySelector('.s-controller__button--active');

  carousel.style.transform = newTransform;
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);