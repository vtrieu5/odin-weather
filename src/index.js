import "./style.css";
import { weatherAPI } from "./modules.js";
const content = document.querySelector("#content");
const input = document.querySelector('input[type="search"]');
const searchBtn = document.querySelector("#searchBtn");
input.addEventListener("search", (event) => {
  weatherAPI(input.value);
});
searchBtn.addEventListener("click", () => {
  weatherAPI(input.value);
});
