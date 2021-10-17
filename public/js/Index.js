import Page from "./Page/Page.js";
import Button from "./Button/Button.js";

const container = document.querySelector(".app");

const web = new Page(
  container,
  "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
);
