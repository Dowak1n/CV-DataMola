const $nextButton = document.getElementById("next");
const $previousButton = document.getElementById("previous");
const $sliderBox = document.getElementById("slider");

const arrayImages = [
  "src/assets/image_one.jpg",
  "src/assets/image_two.jpg",
  "src/assets/image_three.jpg",
];

const arrayLength = arrayImages.length;
let currentImageIndex = 0;

$sliderBox.style = `background: url(${arrayImages[currentImageIndex]}) center / cover no-repeat`;

const NextImage = () => {
  if (currentImageIndex === arrayLength - 1) {
    currentImageIndex = 0;
    $sliderBox.style = `background: url(${arrayImages[currentImageIndex]}) center / cover no-repeat`;

    return;
  }

  currentImageIndex += 1;
  $sliderBox.style = `background: url(${arrayImages[currentImageIndex]}) center / cover no-repeat`;
};

const PreviousImage = () => {
  if (currentImageIndex - 1 < 0) {
    currentImageIndex = arrayLength - 1;
    $sliderBox.style = `background: url(${arrayImages[currentImageIndex]}) center / cover no-repeat`;

    return;
  }

  currentImageIndex -= 1;
  $sliderBox.style = `background: url(${arrayImages[currentImageIndex]}) center / cover no-repeat`;
};

$nextButton.addEventListener("click", NextImage, false);
$previousButton.addEventListener("click", PreviousImage, false);
