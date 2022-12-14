import { countriesApi } from "./services/api.js";
import { nameCountriesApi } from "./services/api.js";
import { countries as data } from "./data.js";

// fetch(countriesApi)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
for (let i = 0; i < data.length; i++) {
  let countriesData = document.querySelector(".row");
  countriesData.innerHTML += `
      
                <div class="card mb-4 col-3" style="width: 17rem;">
        <img style= "height :200px"  src="${data[i].flag}" class="card-img-top">
        <div class="card-body mb-0 pb-0">
        <h5 class="card-title mb-3">${data[i].name}</h5>
        <div class= "box">
        <p class="card-text">Population: ${data[i].population} </p>
        <p class="card-text">Region: ${data[i].region} </p>
        <p class="card-text">Capital: ${data[i].capital} </p>
        </div>
        </div>
        </div>
        `;
}
// });

let nameCountry = document.querySelectorAll("h5");
let input = document.querySelector("input");
let card = document.querySelectorAll(".card");

for (let i = 0; i < nameCountry.length; i++) {
  let name = nameCountry[i].textContent.toLowerCase();
  card[i].addEventListener("click", () => {
    fetch(`${nameCountriesApi}${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let module = document.querySelector(".module");
        module.style.display = "flex";
        let main = document.querySelector(".main");
        main.style.display = "none";
        module.innerHTML = `
        <div>
        <button id="close"> X </button>
        </div>
        <div style="width:50%"><img style="width:100%;" src= "${data[0].flags.svg}">
        </div>
        <div style= "width50%">
        <h5 class="card-title mb-3">${data[0].name.common}</h5>
        <p>Native Name: </p>
        <p>Population</p>
        <p>Region</p>
        <p>Sub Region</p>
        <p>Capital</p>
        <p>Currencies</p>
        <p>Languages</p>
        </div>`;

        ////////
        let close = document.querySelector("#close");
        close.addEventListener("click", () => {
          let module = document.querySelector(".module");
          module.style.display = "none";
          let main = document.querySelector(".main");
          main.style.display = "block";
        });
      });
  });
}

input.addEventListener("keyup", (e) => {
  let search = e.target.value.toLowerCase();
  for (let i = 0; i < nameCountry.length; i++) {
    let name = nameCountry[i].textContent.toLowerCase();
    if (name.includes(search)) {
      card[i].style.display = "block";
    } else {
      card[i].style.display = "none";
    }
  }
});

let darkModeBtn = document.querySelector("#darkmode");

darkModeBtn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
  document.querySelector("h1").classList.toggle("dark");
  darkModeBtn.classList.toggle("dark");
});
