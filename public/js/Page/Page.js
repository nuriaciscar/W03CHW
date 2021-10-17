import Component from "../Component/Component.js";
import PokemonService from "../Service/PokemonService.js";
import PokemonCard from "../Card/PokemonCard.js";
import Button from "../Button/Button.js";

class Page extends Component {
  urlPokemon;
  pokemonList;
  count = 0;

  constructor(parentElement, urlPokemon) {
    super(parentElement, "container", "div");
    this.urlPokemon = urlPokemon;

    this.parentElement.append(this.element);

    this.generateHTML();
    this.createButtons();
    this.updatePokemons();
  }

  updatePokemons() {
    (async () => {
      const getPokemon = new PokemonService(this.urlPokemon);
      const showPokemon = await getPokemon.getPokemons(this.urlPokemon);
      this.pokemonList = showPokemon.results;
      const containerPokemons = document.querySelector(".pokemons-list");

      containerPokemons.innerHTML = "";
      this.pokemonList.map(
        (character) =>
          new PokemonCard(containerPokemons, "pokemon", "li", character.url)
      );
    })();
  }

  createButtons() {
    const buttonsContainer = document.querySelector(".buttons");

    const buttonPrevious = new Button(
      buttonsContainer,
      "button__back",
      "button",
      "<",
      () => {
        if (this.count === 0) {
          return;
        } else {
          this.count -= 10;
          this.urlPokemon = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${this.count}`;

          this.updatePokemons();
        }
      }
    );

    const buttonNext = new Button(
      buttonsContainer,
      "button__next",
      "button",
      ">",
      () => {
        this.count += 10;
        this.urlPokemon = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${this.count}`;

        this.updatePokemons();
      }
    );
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
          <li class="header__menu__page">All</li>
         <li class="header__menu__page">My pokemons</li>
        <li class="header__menu__page">Details</li>
      </ul>
    </header>
    <main class= "main">
      <h2>All</h2>
      <section class="all__cards">
        <div class="buttons">
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
