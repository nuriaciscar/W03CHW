import Component from "./Component.js";
import PokemonService from "./PokemonService.js";
import PokemonCard from "./PokemonCard.js";

class Page extends Component {
  urlPokemon;
  pokemonList;

  constructor(parentElement, urlPokemon) {
    super(parentElement, "container", "div");
    this.urlPokemon = urlPokemon;

    this.parentElement.append(this.element);

    this.generateHTML();

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
  }

  generateHTML() {
    const html = `
       <header class="header">
      <h1 class="header__logo">
        <img
          class="header__logo"
          src="./img/logo.png"
          alt="Pokemons"
          width="120px"
          alt="120px"
        />
      </h1>
          <ul class="header__menu">
         <li class="header__menu__page">Mis pokemons</li>
        <li class="header__menu__page">Detalles</li>
      </ul>
    </header>
    <main>
      <h2>All</h2>
      <section class="all__cards">
        <div class="buttons">
        <button href="#" class="buttons__back"><</button>
            <button href="#" class="buttons__next">></button>
          </div>
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
