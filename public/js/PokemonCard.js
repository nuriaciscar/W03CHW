import PokemonService from "./PokemonService.js";
import Component from "./Component.js";

class PokemonCard extends Component {
  name;
  id;
  type1;
  type2;
  img;
  url;
  pokemon = {};

  constructor(parentElement, className, htmlTag, url) {
    super(parentElement, className, "li");

    this.url = url;
    this.getData();
    this.parentElement.append(this.element);
  }

  async getData() {
    const getAPokemon = new PokemonService(this.url);
    const onePokemon = await getAPokemon.getPokemons(this.url);
    this.pokemon = onePokemon;

    this.id = onePokemon.id;
    this.name = onePokemon.name;
    this.type1 = onePokemon.types[0].type.name;

    if (onePokemon.types[1]) {
      this.type2 = onePokemon.types[1].type.name;
    }
    if (this.type2 === undefined) {
      this.type2 = "";
    }

    this.img = onePokemon.sprites.other.dream_world.front_default;
    this.createHTML();
  }

  createHTML() {
    const html = `<p> #${this.id}</p>
              <img
                class="pokemon__image"
                src="${this.img}"
                width="100px"
                height="100px"
                alt= "${this.name}"
              />
              <h3 class="pokemon__name">${this.name}</h3>
              <div class="pokemon__category">
                <div class="pokemon__category__one">${this.type1}</div>
                <div class="pokemon__category__two">${this.type2}</div>
              </div>`;

    this.element.innerHTML = html;
  }
}

export default PokemonCard;
