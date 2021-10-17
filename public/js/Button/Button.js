import Component from "../Component/Component.js";

class Button extends Component {
  actionOnClick;
  constructor(parentElement, actionOnClick) {
    super(parentElement, clasName, htmlTag);
    this.actionOnClick = actionOnClick;

    this.action();
  }

  action() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default Button;
