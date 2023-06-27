"use strict";

const Container = document.querySelector("section");
const resultsButton = document.querySelector("section + div");
const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");
const image3 = document.querySelector("section img:nth-child(3)");
const btn = document.getElementById("btn")


let clicks = 0;
const maxClicksAllowed = 9;

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

function renderProducts() {
  let pro1 = getRandomNumber();
  let pro2 = getRandomNumber();
  let pro3 = getRandomNumber();

  while (pro1 === pro2|| pro1 === pro3 || pro2 === pro3) {
    pro2 = getRandomNumber();
    pro3 = getRandomNumber();
  }


  image1.src = allProducts[pro1].src;
  image2.src = allProducts[pro2].src;
  image3.src = allProducts[pro3].src;

  image1.alt = allProducts[pro1].name;
  image2.alt = allProducts[pro2].name;
  image3.alt = allProducts[pro3].name;


  allProducts[pro1].views++;
  allProducts[pro2].views++;
  allProducts[pro3].views++;

usedPro = [];
usedPro.push(pro1, pro2);
}

function handleProClick(event) {
  if (event.target === Container) {
    alert("Please click on an image");
  } else {
    clicks++;
    let clickedpro = event.target.alt;
    for (let i = 0; i < allProducts.length; i++) {
      if (clickedpro === allProduct[i].name) {
        allProduct[i].clicks++;
        break;
      }
    }
    if (clicks === maxClicksAllowed) {
      Container.removeEventListener("click", handleProClick);
      Container.className = "no-voting";
      resultsButton.addEventListener("click", renderResults);
      resultsButton.className = "clicks-allowed";
      alert("you've used all your votes")
    } else {
      renderProducts();
    }
  }
}

function renderResults() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < allProduct.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allProduct[i].name} had ${allProduct[i].views} views and was clicked ${allProduct[i].clicks} times.`;
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
const dogduck = new Product("dog-duck", "images/dog-duck.jpg");
const dragon = new Product("dragon", "images/dragon.jpg");
const pen = new Product("pen", "images/pen.jpg");
const petsweep = new Product("pet-sweep", "images/pet-sweep.jpg");
const scissors = new Product("scissors", "images/scissors.jpg");
const shark = new Product("shark", "images/shark.jpg");
const sweep = new Product("sweep", "images/sweep.png");
const tauntaun = new Product("tauntaun", "images/tauntaun.jpg");
const unicorn = new Product("unicorn", "images/unicorn.jpg");
const watercan = new Product("water-can", "images/water-can.jpg");
const wineglass = new Product("wine-glass", "images/wine-glass.jpg");

Container.addEventListener("click", handleProClick);

renderProducts();