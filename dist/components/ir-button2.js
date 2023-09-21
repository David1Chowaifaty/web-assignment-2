import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';

const IrButton = /*@__PURE__*/ proxyCustomElement(class IrButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.buttonClicked = createEvent(this, "buttonClicked", 7);
    this.type = 'button';
    this.buttonTitle = '';
    this.icon = '';
    this.buttonStyle = '';
    this.colorVariant = 'primary';
    this.shadow = '';
    this.glow = undefined;
    this.shapeVariant = 'default';
  }
  shapeChanged() {
    this.applyButtonStyle();
  }
  colorChanged() {
    this.applyButtonStyle();
  }
  applyButtonStyle() {
    switch (this.shapeVariant) {
      case 'round':
        return `btn-${this.colorVariant} round`;
      case 'square':
        return `btn-${this.colorVariant} square`;
      case 'outline':
        return `btn-outline-${this.colorVariant}`;
      default:
        return `btn-${this.colorVariant}`;
    }
  }
  handleClick() {
    this.buttonClicked.emit();
  }
  render() {
    let shadow = '';
    if (this.shadow !== '') {
      shadow = `box-shadow-${this.shadow}`;
    }
    return (h("button", { type: this.type, onClick: this.handleClick.bind(this), class: `btn ${this.applyButtonStyle()} ${this.buttonStyle} ${shadow} ${this.glow ? 'btn-glow' : ''} ` }, this.icon !== '' && (h(Fragment, null, h("i", { class: this.icon }), "\u00A0")), this.buttonTitle));
  }
  static get watchers() { return {
    "shapeVariant": ["shapeChanged"],
    "colorVariant": ["colorChanged"]
  }; }
}, [0, "ir-button", {
    "type": [513],
    "buttonTitle": [513, "button-title"],
    "icon": [513],
    "buttonStyle": [513, "button-style"],
    "colorVariant": [513, "color-variant"],
    "shadow": [513],
    "glow": [516],
    "shapeVariant": [513, "shape-variant"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrButton);
      }
      break;
  } });
}

export { IrButton as I, defineCustomElement as d };

//# sourceMappingURL=ir-button2.js.map