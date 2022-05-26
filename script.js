let http = new XMLHttpRequest();
http.open("get", "package.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";
    let out = "";
    let var1 = "";
    let home = "";
    for (let item of products.icons) {
      output += `
           <div class="product">
              <img src="${item.image}">
              <p class="title">${item.title}</p>
              
             
             
           </div>
        `;
    }
    for (let item of products.trendingServices) {
      out += `
      <div class="service_box">

      <img src="${item.image}" alt="${item.description}" class="service_img"/>
      <p class="service_description centered">${item.description}</p>
    </div>
        `;
    }
    for (let item of products.sameServices) {
      var1 += `
      <div class="person_service_box">

      <img src="${item.image}" alt="${item.description}" class="person_service_img"/>
      <p class="service_description centered">${item.description}</p>
    </div>
        `;
    }
    for (let item of products.homeServices) {
      home += `
      <div class="home_service_box">

      <img src="${item.image}" alt="${item.description}" class="person_service_img"/>
      <p class="service_description centered">${item.description}</p>
    </div>
        `;
    }
    document.querySelector(".home-services").innerHTML = home;
    document.querySelector(".trending-services").innerHTML = out;
    document.querySelector(".same-services").innerHTML = var1;
    document.querySelector(".icons").innerHTML = output;
  }
};
const slides = document.querySelectorAll(".slide");
// slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
let currSlide = 0;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};
goToSlide(0);
btnRight.addEventListener("click", function () {
  if (currSlide === slides.length - 1) currSlide = 0;
  else currSlide++;
  goToSlide(currSlide);
});
btnLeft.addEventListener("click", function () {
  if (currSlide === 0) currSlide = slides.length - 1;
  else currSlide--;
  goToSlide(currSlide);
});

navigator.geolocation.getCurrentPosition(
  function (pos) {
    const { latitude } = pos.coords;
    const { longitude } = pos.coords;
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    document.querySelector(
      ".location"
    ).innerHTML = `<a href=https://www.google.com/maps/@${latitude},${longitude}>location</a>`;
  },
  function () {
    alert("can't able to fetch");
  }
);
