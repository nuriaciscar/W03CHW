import PokemonService from "./PokemonService.js";
import Component from "./Component.js";

class PokemonCard extends Component {
  name;
  id;
  type;
  img;
  url;

  constructor(parentElement, className, htmlTag, url) {
    super(parentElement, className, htmlTag);
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.url = url;
  }
}

export default PokemonCard;
