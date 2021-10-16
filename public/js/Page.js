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

    this.generateHTML();
  

  ( async() {
    const getPokemon = new PokemonService(this.urlPokemon);
    const showPokemon = await getPokemon.getPokemons(this.urlPokemon);
    this.pokemonList= showPokemon.results;

    this.pokemonList.map((character) => new PokemonCard (containerPokemons, "pokemon", "li", character.url));

    })();
  }

  generateHTML(){
    this.element.innerHTML=
    `
    <header class="header">
      <h1>
        <img
          class="logo"
          src="./img/logo.png"
          alt="Pokemons"
          width="120px"
          alt="120px"
        />
      </h1>
      <ul>
        <li>Mis pokemons</li>
        <li>Detalles</li>
      </ul>
    </header>
    <main>
      <h2>All</h2>
      <section class="all">
        <div class="all__cards">
          <ul class="pokemons-list">
          </ul>
        </div>
      </section>
    </main>
    <footer class="footer"></footer>`;
    
    const containerPokemons = document.querySelector(".pokemons-list");

  }
}


export default Page;