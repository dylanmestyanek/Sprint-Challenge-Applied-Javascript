/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carousel = document.querySelector('.carousel-container');
let count = 1;

function createCarousel(){
  const carouselContainer = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');
  const mountainsImg = document.createElement('img');
  const computerImg = document.createElement('img');
  const treesImg = document.createElement('img');
  const turntableImg = document.createElement('img');

  carouselContainer.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  leftButton.addEventListener('click', () => {
    console.log('i am left button', count);
    count == 1 ? count = 4 : count--;
    let prevImg = document.getElementById(`${count === 1 ? 4 : count - 1}`);
    let nextImg = document.getElementById(`${count === 4 ? 1 : count + 1}`);
    let currImg = document.getElementById(`${count}`);
    currImg.classList.toggle('active');
    nextImg.classList.remove('active');
    prevImg.classList.remove('active');
  });

  rightButton.addEventListener('click', () => {
    console.log('I am right button', count);
    count == 4 ? count = 1 : count++;
    let prevImg = document.getElementById(`${count === 1 ? 4 : count - 1}`);
    let nextImg = document.getElementById(`${count === 4 ? 1 : count + 1}`);
    let currImg = document.getElementById(`${count}`);
    currImg.classList.toggle('active');
    nextImg.classList.remove('active');
    prevImg.classList.remove('active');
  });

  mountainsImg.src = "../../assets/carousel/mountains.jpeg";
  mountainsImg.id = '1';
  computerImg.src = "../../assets/carousel/computer.jpeg";
  computerImg.id = '2';
  treesImg.src = "../../assets/carousel/trees.jpeg";
  treesImg.id = '3';
  turntableImg.src = "../../assets/carousel/turntable.jpeg";
  turntableImg.id = '4';

  carouselContainer.appendChild(leftButton);
  carouselContainer.appendChild(mountainsImg);
  carouselContainer.appendChild(computerImg);
  carouselContainer.appendChild(treesImg);
  carouselContainer.appendChild(turntableImg);
  carouselContainer.appendChild(rightButton);

  return carouselContainer;
};


carousel.appendChild(createCarousel());