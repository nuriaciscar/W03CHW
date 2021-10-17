import Component from "../Component/Component.js";

class Button extends Component {
  actionClick;
  text;

  constructor(parentElement, className, htmlTag, text, actionClick) {
    super(parentElement, className, "button");
    this.actionOnClick = actionOnClick;
    this.text = text;
    this.element.innerHTML = text;

    this.action();
  }

  action() {
    this.element.addEventListener("click", this.actionClick);
  }
}

export default Button;
