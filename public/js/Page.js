import Component from "./Component.js";
import PokemonService from "./PokemonService.js";

class Page extends Component {
  urlPokemon;
  pokemonList;

  constructor(parentElement, urlPokemon) {
    super(parentElement, "container2", "div");
    this.urlPokemon = urlPokemon;

    (async () => {
      const getPokemon = new PokemonService(this.urlPokemon);
      const showPokemon = await getPokemon.getPokemons(this.urlPokemon);
      this.pokemonList = showPokemon.results;
      const containerPokemons = document.querySelector(".pokemons-list");

      this.pokemonList.map(
        (character) =>
          new PokemonCard(containerPokemons, "pokemon", "li", character.url)
      );
    })();

    this.generateHTML();
  }

  generateHTML() {
    const html = `
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

    this.element.innerHTML = html;
  }
}

export default Page;
