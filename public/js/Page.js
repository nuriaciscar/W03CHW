import Component from "./Component";
import PokemonCard from "./PokemonCard";
import PokemonService from "./PokemonService";

class Page extends Component {
  urlPokemon;
  pokemonList;

  constructor(parentElement, className, htmlTag, urlPokemon) {
    super(parentElement, className, htmlTag);
    this.urlPokemon = urlPokemon;
    this.parentElement = parentElement;
    this.element = document.createElement(htmlTag);
    this.element.className = className;
  }

  (async() {
    const getPokemon = new PokemonService(this.urlPokemon);
    const showPokemon = await getPokemon.getPokemons(this.urlPokemon);
    this.pokemonList= showPokemon.results;

    this.pokemonList.map((character) => new PokemonCard ()
  }
  )
}
