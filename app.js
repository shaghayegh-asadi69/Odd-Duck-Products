"use strict";

// console.log("ducks");

const productContainer = document.querySelector("section");
const resultsButton = document.querySelector("section + div");
const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");
const image3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
const maxClicksAllowed = 25;

let allProducts = [];

function getRandomNumber() {
  return Math.floor(Math.random() * allProducts.length);
}

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

let previousProducts = [];

function renderProducts() {
  let product1 = getRandomNumber();

  while (previousProducts.includes(product1)) {
    product1 = getRandomNumber();
  }

  let product2 = getRandomNumber();

  while (previousProducts.includes(product2) || product2 === product1) {
    product2 = getRandomNumber();
  }

  let product3 = getRandomNumber();

  while (
    previousProducts.includes(product3) ||
    product3 === product1 ||
    product3 === product2
  ) {
    product3 = getRandomNumber();
  }

  previousProducts = [product1, product2, product3];

  image1.src = allProducts[product1].src;
  image2.src = allProducts[product2].src;
  image3.src = allProducts[product3].src;
  image1.alt = allProducts[product1].name;
  image2.alt = allProducts[product2].name;
  image3.alt = allProducts[product3].name;
  console.log(allProducts[product1].views++);
  console.log(allProducts[product2].views++);
  console.log(allProducts[product3].views++);
}

function handleProductClick(event) {
  if (event.target === productContainer) {
    alert("Please click on an image!");
  } else {
    clicks++;
    //   console.log(clicks);
    let clickedProduct = event.target.alt;
    for (let i = 0; i < allProducts.length; i++) {
      if (clickedProduct === allProducts[i].name) {
        allProducts[i].clicks++;
        break;
      }
    }
    if (clicks === maxClicksAllowed) {
      productContainer.removeEventListener("click", handleProductClick);
      productContainer.className = "no-voting";
      resultsButton.addEventListener("click", renderChart);
      resultsButton.addEventListener("click", renderChart2);
      resultsButton.className = "clicks-allowed";
    } else {
      renderProducts();
    }
  }
}

function renderResults() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked ${allProducts[i].clicks} times.`;
    ul.appendChild(li);
  }
}

const bag = new Product("bag", "images/bag.jpg");
const banana = new Product("banana", "images/banana.jpg");
const bathroom = new Product("bathroom", "images/bathroom.jpg");
const boots = new Product("boots", "images/boots.jpg");
const breakfast = new Product("breakfast", "images/breakfast.jpg");
const bubblegum = new Product("bubblegum", "images/bubblegum.jpg");
const chair = new Product("chair", "images/chair.jpg");
const cthulhu = new Product("cthulhu", "images/cthulhu.jpg");
const dogDuck = new Product("dog-duck", "images/dog-duck.jpg");
const dragon = new Product("dragon", "images/dragon.jpg");
const pen = new Product("pen", "images/pen.jpg");
const petSweep = new Product("pet-sweep", "images/pet-sweep.jpg");
const scissors = new Product("scissors", "images/scissors.jpg");
const shark = new Product("shark", "images/shark.jpg");
const sweep = new Product("sweep","/images/sweep.png");
const tauntaun = new Product("tauntaun", "images/tauntaun.jpg");
const unicorn = new Product("unicorn", "images/unicorn.jpg");
const waterCan = new Product("water-can", "images/water-can.jpg");
const wineGlass = new Product("wine-glass", "images/wine-glass.jpg");

renderProducts();

productContainer.addEventListener("click", handleProductClick);

(Chart.defaults.font.family = "Space Grotesk"), "fec601";

function renderChart() {
  const productNames = [];
  const productViews = [];
  const productClicks = [];

  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
    productViews.push(allProducts[i].views);
    productClicks.push(allProducts[i].clicks);
  }

  const data = {
    labels: productNames,
    datasets: [
      {
        label: "Clicks",
        data: productClicks,
        backgroundColor: ["#fec601"],
        borderColor: ["#02361882"],
        borderWidth: 1,
      },
      {
        label: "Views",
        data: productViews,
        backgroundColor: ["#02361882"],
        borderColor: ["#fec601"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
  };

  const productChart = document.getElementById("chart");
  const myChart = new Chart(productChart, config);
}

function renderChart2() {
  const productNames = [];
  const productViews = [];
  const productClicks = [];

  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
    productViews.push(allProducts[i].views);
    productClicks.push(allProducts[i].clicks);
  }

  const data = {
    labels: productNames,
    datasets: [
      {
        label: "Clicks",
        data: productClicks,
        backgroundColor: ["#fec601"],
        borderColor: ["#02361882"],
        borderWidth: 1,
      },
      {
        label: "Views",
        data: productViews,
        backgroundColor: ["#02361882"],
        borderColor: ["#fec601"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
  };

  const productChart2 = document.getElementById("chart2");
  const myChart = new Chart(productChart2, config);
}
