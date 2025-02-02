const slidesData = [
  {
    image:
      "https://images.pexels.com/photos/11768327/pexels-photo-11768327.jpeg",
    title: "Image 1",
  },
  {
    image: "https://images.pexels.com/photos/753320/pexels-photo-753320.jpeg",
    title: "Image 2",
  },
  {
    image: "https://images.pexels.com/photos/6120456/pexels-photo-6120456.jpeg",
    title: "Image 3",
  },
  {
    image:
      "https://images.pexels.com/photos/28491961/pexels-photo-28491961.jpeg",
    title: "Image 4",
  },
];

const slides = document.getElementById("slides");
const navDots = document.getElementById("nav-dots");

slidesData.forEach(({ image, title }) => {
  const slideElement = document.createElement("div");
  slideElement.classList.add("slide");
  slideElement.innerHTML = `
    <div class="image" style="--url: url('${image}')"></div>
    <h2>${title}</h2>
  `;
  slides.appendChild(slideElement);

  navDots.innerHTML += `<i class="fa-solid fa-circle"></i>`;
});

const setDiameter = () => {
  const slider = document.getElementById("slider");
  const sliderWidth = slider.offsetWidth;
  const sliderHeight = slider.offsetHeight;
  const diameter = Math.sqrt(sliderWidth ** 2 + sliderHeight ** 2);
  document.documentElement.style.setProperty("--diameter", `${diameter}px`);
};

setDiameter();

window.addEventListener("resize", setDiameter);

const slideElements = document.getElementsByClassName("slide");
const navDotElements = document.getElementsByClassName("fa-solid fa-circle");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let activeIndex = 0;
slideElements[activeIndex].classList.add("active");
navDotElements[activeIndex].classList.add("active");

prevBtn.addEventListener("click", () => {
  slideElements[activeIndex].classList.remove("active");
  navDotElements[activeIndex].classList.remove("active");

  const length = slideElements.length;
  activeIndex = (activeIndex - 1 + length) % length;

  slideElements[activeIndex].classList.add("active");
  navDotElements[activeIndex].classList.add("active");
});

nextBtn.addEventListener("click", () => {
  slideElements[activeIndex].classList.remove("active");
  navDotElements[activeIndex].classList.remove("active");

  const length = slideElements.length;
  activeIndex = (activeIndex + 1) % length;

  slideElements[activeIndex].classList.add("active");
  navDotElements[activeIndex].classList.add("active");
});
