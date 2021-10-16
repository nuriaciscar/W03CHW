import PokemonService from "./PokemonService.js";
import Component from "./Component.js";

class PokemonCard extends Component {
  name;
  id;
  type;
  img;
  url;
  pokemon = {};

  constructor(parentElement, className, htmlTag, url) {
    super(parentElement, className, htmlTag);
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.url = url;

    (async () => {
      const getAPokemon = new PokemonService(this.url);
      const onePokemon = await getAPokemon.getPokemons(this.url);
      this.pokemon = onePokemon;

      this.id = onePokemon.id;
      this.name = onePokemon.name;
      this.type = onePokemon.types[0].type.name;
      this.pokemon = onePokemon;
      this.img =onePokemon.sprites.other.dream_world.front_default;

    })();

    createHTML();
  }
}

createHTML(){
const html= 
  `   <p>${this.id}</p>
              <img
                class="pokemon__image"
                src="${this.img}"
                width="100px"
                height="100px"
                alt= "${this.name}"
              />
              <h3 class="${this.name}">Monferno</h3>

              <div class="pokemon__category">
                <div class="pokemon__category__one">${this.type}</div>
                <div class="pokemon__category__two">Fighting</div>
              </div>`;
  
  this.element.innerHTML = html;
}


export default PokemonCard;
