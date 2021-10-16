import PokemonService from "./PokemonService";
import Component from "./Component";

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
