import Component from "../Component/Component.js";

class Button extends Component {
  actionClick;
  text;

  constructor(parentElement, className, htmlTag, text, actionClick) {
    super(parentElement, className, "button");
    this.actionClick = actionClick;
    this.text = text;
    this.element.innerHTML = this.text;
    this.parentElement.append(this.element);

    this.action();
  }

  action() {
    this.element.addEventListener("click", this.actionClick);
  }
}

export default Button;
