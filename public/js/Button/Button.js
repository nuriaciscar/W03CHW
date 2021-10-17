import Component from "../Component/Component.js";

class Button extends Component {
  actionOnClick;
  constructor(parentElement, className, htmlTag, actionOnClick) {
    super(parentElement, className, "button");
    this.actionOnClick = actionOnClick;

    this.action();
  }

  action() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default Button;
