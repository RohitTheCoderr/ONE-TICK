// select Noodles food
// const noodles= document.querySelector(".Noodles ")
//    or
const noodles = document.getElementsByClassName("Noodles")[0];
const Nli1 = noodles.querySelector("li");
// const Nli2 = noodles.querySelectorAll("li")[1];
const Nli2 = noodles.querySelector("li:nth-child(2)");     // we can also select second child of li
const Nli3 = noodles.querySelectorAll("li")[2];
const Nli4 = noodles.querySelectorAll("li")[3];

//
const itemImg = document.getElementById("menuItems");
const itemInfo = document.querySelector(".info-item");
const aboutFood = itemInfo.querySelectorAll("p")[0];
const foodName = itemInfo.querySelectorAll("h2")[0];
const itemRate = document.createElement("h3");
itemInfo.appendChild(itemRate);
const foodRate = itemInfo.querySelectorAll("h2")[0];

function nood1() {
  Nli1.style.color = "white";
  itemImg.src = "./img/chicken.png" ;
  foodName.textContent = "CHICKEN NOODLES";
  aboutFood.textContent = "This is chicken Noodles. it is so testy ";
  itemRate.textContent = "PRICE OF FOOD = 100 /-";
}
function nood2() {
  Nli2.style.color = "white";
  itemImg.src = "./img/Egg-noodles.png";
  foodName.textContent = "EGG NOODLES";
  aboutFood.textContent = "This is Egg Noodles. it is so testy ";
  itemRate.textContent = "PRICE OF FOOD = 80 /-";
}
function nood3() {
  Nli3.style.color = "white";
  itemImg.src = "./img/veg-noodles.png";
  foodName.textContent = "VEG NOODLES";
  aboutFood.textContent = "This is veg Noodles. it is so testy ";
  itemRate.textContent = "PRICE OF FOOD = 120 /-";
}
function nood4() {
  Nli4.style.color = "white";
  itemImg.src = "./img/mix-noodles.png";
  foodName.textContent = "MIX NOODLES";
  aboutFood.textContent = "This is Mix Noodles. it is so testy ";
  itemRate.textContent = "PRICE OF FOOD = 80 /-";
}
//  select vegetarian dishes
const Vegetarian = document.querySelector(".Vegetarian");
// console.log(Vegetarian);
const Vli1 = Vegetarian.querySelector("li");
const Vli2 = Vegetarian.querySelectorAll("li")[1];
const Vli3 = Vegetarian.querySelectorAll("li")[2];
const Vli4 = Vegetarian.querySelectorAll("li")[3];
const Vli5 = Vegetarian.querySelectorAll("li")[4];
const Vli6 = Vegetarian.querySelectorAll("li")[5];
const Vli7 = Vegetarian.querySelectorAll("li")[6];
const Vli8 = Vegetarian.querySelectorAll("li")[7];
function veg1() {
  Vli1.style.color = "white";
  itemImg.src = "./img/Pan-manc-dry.png";
  foodName.textContent = "PANEER MANCHOORIAN DRY";
  aboutFood.textContent = "This is paneer manchoorian dry. it is so testy ";
  itemRate.textContent = `PRICE (Full) = 200 /-  PRICE (Half) = 120 /-`;
}
function veg2() {
  Vli2.style.color = "white";
  itemImg.src = "./img/Matar-Paneer.png";
  foodName.textContent = "MATAR PANEER";
  aboutFood.textContent = "This is Matar paneer. it is so testy ";
  itemRate.textContent = `PRICE (Full) = 180 /-  PRICE (Half) = 100 /-`;
}
function veg3() {
  Vli3.style.color = "white";
  itemImg.src = "./img/kadai-Paneer.png";
  foodName.textContent = "KADAI PANEER";
  aboutFood.textContent = "This is Matar paneer. it is so testy ";
  itemRate.textContent = `PRICE (Full) = 200 /-  PRICE (Half) = 130 /-`;
}
function veg4() {
  Vli4.style.color = "white";
  itemImg.src = "./img/aloo-gobi.webp";
  foodName.textContent = "ALOO GOBI MASALA";
  aboutFood.textContent = "Aloo gobi: A widely loved Indian vegetarian dish made up of spiced cauliflower and potatoes. This is a dish people often make at home because it is easy to make, and the combination of cauliflower and potatoes makes it a very filling entreé.";
  itemRate.textContent = `PRICE (Full) = 100 /-  PRICE (Half) = 60 /-`;
}
function veg5() {
  Vli5.style.color = "white";
  itemImg.src = "./img/mix-veg.webp";
  foodName.textContent = "Mix Veg";
  aboutFood.textContent = "This is Mix Veg. it is so testy ";
  itemRate.textContent = `PRICE (Full) = (Half) = 60 /-`;
}
function veg6() {
  Vli6.style.color = "white";
  itemImg.src = "./.png";
  foodName.textContent = "Daal Fry";
  aboutFood.textContent = "Dal: Dal is the Hindi name for lentils, and it broadly refers to all lentil soups in Indian cuisine. Tadka: Dal with a mild tempering of whole spices like cumin seeds, mustard seeds, etc.";
  itemRate.textContent = `PRICE (Full) = 80 /- (Half) = 50 /-`;
}
function veg7() {
  Vli7.style.color = "white";
  itemImg.src = "./img/mushroom.webp";
  foodName.textContent = "MUSHROOM DRY / GRAVY";
  aboutFood.textContent = "This is Mushroom dry / gravy. it is so testy ";
  itemRate.textContent = `PRICE (Full) = 180 /- (Half) = 100 /-`;
}
function veg8() {
  Vli8.style.color = "white";
  itemImg.src = "./img/channa-masala.webp";
  foodName.textContent = "CHANNA MASALA";
  aboutFood.textContent = "Chana or Chole is the Hindi name for chickpeas. Chana masala is simply chickpeas cooked in an onion, ginger, and garlic-based sauce with garam masala added to it. This is a popular North Indian curry";
  itemRate.textContent = `PRICE (Full) = 120 /- (Half) = 60 /-`;
}

//  select Tandoor

const Tandoor = document.querySelector(".Tandoor");
// console.log(Tandoor);
const Tli1 = Tandoor.querySelector("li");
const Tli2 = Tandoor.querySelectorAll("li")[1];
const Tli3 = Tandoor.querySelectorAll("li")[2];
const Tli4 = Tandoor.querySelectorAll("li")[3];
const Tli5 = Tandoor.querySelectorAll("li")[4];
const Tli6 = Tandoor.querySelectorAll("li")[5];
const Tli7 = Tandoor.querySelectorAll("li")[6];

function tan1() {
  Tli1.style.color = "white";
  itemImg.src = "./img/naan.webp";
  foodName.textContent = "NAAN/ BUTTER NAAN";
  // aboutFood.textContent = "Naan is one of the most popular Indian flatbreads. To make naan, wheat flour dough is prepawhite either by allowing it to rise using yeast or by the addition of yogurt to the dough. That dough is then rolled into flatbreads and cooked in an Indian oven called a tandoor.";
  itemRate.textContent = `PRICE (per p.) = 15 /- `;
}
function tan2() {
  Tli2.style.color = "white";
  itemImg.src = "./img/naan.webp";
  foodName.textContent = "KULCHA";
  aboutFood.textContent = "This is kulcha. it is so testy ";
  itemRate.textContent = `PRICE (per p.) = 15 /- `;
}
function tan4() {
  Tli4.style.color = "white";
  itemImg.src = "./img/alu-paratha.webp";
  foodName.textContent = "ALU PARATHA";
  // // aboutFood.textContent = "Paratha: Paratha is a flatbread that is layewhite and pan-fried. They are made with wheat flour, and ghee or oil is smeawhite between layers of dough while rolling them. But there are many ways in which you can make a paratha, especially stuffed paratha. In a stuffed paratha, the filling is stuffed into a ball of dough and then rolled into a flatbread. Aloo Paratha: With spicy potato filling";
  itemRate.textContent = `PRICE (per p.) = 25 /- `;
}
function tan5() {
  Tli5.style.color = "white";
  itemImg.src = "./img/chilli-paratha.webp";
  foodName.textContent = "CHILLI PARATHA";
  aboutFood.textContent = "This is Chilli paratha. it is so testy ";
  itemRate.textContent = `PRICE (per p.) = 25 /- `;
}
function tan7() {
  Tli7.style.color = "white";
  itemImg.src = "./img/rice.jpg";
  foodName.textContent = "RICE";
  aboutFood.textContent = "This is Rice. it is so testy ";
  itemRate.textContent = `PRICE (Full) = 50 /-  PRICE (HALF) = 30 /-`;
}

//  select Egg item

const EggItem = document.querySelector(".Egg");
// console.log(EggItem);
const Eli1 = EggItem.querySelector("li");
const Eli2 = EggItem.querySelectorAll("li")[1];
const Eli3 = EggItem.querySelectorAll("li")[2];
const Eli4 = EggItem.querySelectorAll("li")[3];

function Egg1() {
  Eli1.style.color = "white";
  itemImg.src = "./img/omelet.webp";
  foodName.textContent = "MASALA OMELET";
  aboutFood.textContent = "This is Masala Omelet. it is so testy ";
  itemRate.textContent = `PRICE OF (2 piece) = 50 /-  ADD per piece= 20 -/`;
}
function Egg2() {
  Eli2.style.color = "white";
  itemImg.src = "./img/fried-egg.webp";
  foodName.textContent = "FRIED EGG";
  aboutFood.textContent = "This is Fried Egg. it is so testy ";
  itemRate.textContent = `PRICE OF (2 piece) = 40 /-  ADD per piece= 15 -/`;
}
function Egg3() {
  Eli3.style.color = "white";
  itemImg.src = "./img/omelet.webp";
  foodName.textContent = "MASALA OMELET";
  aboutFood.textContent = "This is Masala Omelet. it is so testy ";
  itemRate.textContent = `PRICE OF (2 piece) = 20 /-`;
}
function Egg4() {
  Eli4.style.color = "white";
  itemImg.src = "./img/omelet.webp";
  foodName.textContent = "EGG PODIMAS";
  aboutFood.textContent = "This is Egg Podimast. it is so testy ";
  itemRate.textContent = `PRICE OF (2 piece) = 50 /-  ADD per piece= 20 -/`;
}

// select SEA FOOD

const SeaItem = document.querySelector(".SeaFood");
console.log(SeaItem);
const Sli1 = SeaItem.querySelector("li");
const Sli2 = SeaItem.querySelectorAll("li")[1];
const Sli3 = SeaItem.querySelectorAll("li")[2];
const Sli4 = SeaItem.querySelectorAll("li")[3];

function Sea1() {
  Sli1.style.color = "white";
  itemImg.src = "./img/fish-fry.png";
  foodName.textContent = "FISH FRY";
  aboutFood.textContent = "This is Fish Fry. it is so testy ";
  itemRate.textContent = `PRICE (Full) = 180 /-  PRICE (Half) = 100 /-`;
}
function Sea2() {
  Sli2.style.color = "white";
  itemImg.src = "./img/finger-fish.png";
  foodName.textContent = "FISH FRY";
  aboutFood.textContent = "This is Fish Fry. it is so testy ";
  itemRate.textContent = `PRICE (Full) = 140 /-  PRICE (Half) = 80 /-`;
}
function Sea3() {
  Sli3.style.color = "white";
  itemImg.src = "./img/fish-fry.png";
  foodName.textContent = "CHILLY FISH";
  aboutFood.textContent = "This is Chilly Fish. it is so testy ";
  itemRate.textContent = `PRICE (Full) = 200 /- <br> PRICE (Half) = 100 /-`;
}

//  select fast food

const fastFood = document.querySelector(".FastFood");
console.log(fastFood);
const Fli1 = fastFood.querySelector("li");
const Fli2 = fastFood.querySelectorAll("li")[1];
const Fli3 = fastFood.querySelectorAll("li")[2];
const Fli4 = fastFood.querySelectorAll("li")[3];
const Fli5 = fastFood.querySelectorAll("li")[4];
const Fli6 = fastFood.querySelectorAll("li")[5];

function fast1() {
  Fli1.style.color = "white";
  itemImg.src = "./img/pizza.png";
  foodName.textContent = "PIZZA";
  aboutFood.textContent = "This is Pizza. it is so testy ";
  itemRate.textContent = `PRICE (BIG) = 399 /-  PRICE (MIDIAM) = 249 /-  PRICE (SMALL) = 149 /-`;
}
function fast2() {
  Fli2.style.color = "white";
  itemImg.src = "./img/beef burger .jpg";
  foodName.textContent = "BURGER";
  aboutFood.textContent = "This is Burger. it is so testy ";
  itemRate.textContent = `PRICE OF DOUBLE TIKKI = 50/-  SINGLE TIKKI = 30 /-`;
}
function fast3() {
  Fli3.style.color = "white";
  itemImg.src = "./img/mix-noodles.png";
  foodName.textContent = "EGG NOODLES";
  aboutFood.textContent = "This is Egg Noodles. it is so testy ";
  itemRate.textContent = `PRICE (FULL) = 40 /-  (HALF) = 20 /-`;
}
function fast4() {
  Fli4.style.color = "white";
  itemImg.src = "./img/samosa.png";
  foodName.textContent = "SAMOSA";
  aboutFood.textContent =
    "Samosa: Another popular Indian street food is samosa. Samosas contain a small amount of spicy potato or meat filling that is then wrapped in dough and deep-fried until crispy and flaky.";
  itemRate.textContent = `PRICE OF single piece = 15 /- `;
}
function fast5() {
  Fli5.style.color = "white";
  itemImg.src = "./img/momos.png";
  foodName.textContent = "MOMOS";
  aboutFood.textContent = "This is Momos. it is so testy ";
  itemRate.textContent = `PRICE (FULL) = 60 /-  (HALF) = 30 /-`;
}
function fast6() {
  Fli6.style.color = "white";
  itemImg.src = "./img/chilly-patato.webp";
  foodName.textContent = "CHILLY PATATO";
  aboutFood.textContent = "This is Chilly Patato. it is so testy ";
  itemRate.textContent = `PRICE (FULL) = 80 /- (HALF) = 50 /-`;
}
