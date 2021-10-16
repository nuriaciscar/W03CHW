import Component from "./Component.js";
import Page from "./Page.js";
import PokemonCard from "./PokemonCard.js";

const container = document.querySelector("div.container");

const web = new Page(
  container,
  "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
);
