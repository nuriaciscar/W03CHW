import Page from "./Page/Page.js";
import Button from "./Button/Button.js";

const container = document.querySelector(".app");

const web = new Page(
  container,
  "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
);

// const buttonsContainer = document.querySelector(".buttons");

// let url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
// let count = 0;

// const buttonPrevious = new Button(
//   buttonsContainer,
//   "button__back",
//   "button",
//   "<",
//   () => {
//     if (count === 0) {
//       return;
//     } else {
//       count -= 10;
//       url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${count}`;
//       container.innerHTML = "";
//       const newPage = new Page(container, url);
//     }
//   }
// );

// const buttonNext = new Button(
//   buttonsContainer,
//   "button__next",
//   "button",
//   ">",
//   () => {
//     count += 10;
//     url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${count}`;
//     container.innerHTML = "";
//     const newPage = new Page(container, url);
//   }
// );
