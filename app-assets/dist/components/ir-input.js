import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const irInputCss = ":host{display:block}";

const IrInput$1 = /*@__PURE__*/ proxyCustomElement(class IrInput extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.placeholder = undefined;
    this.value = undefined;
    this.type = undefined;
    this.currentValue = undefined;
    this.inputStyle = undefined;
  }
  componentWillLoad() {
    if (this.value !== '') {
      this.currentValue = this.value;
    }
  }
  handleChange(event) {
    this.currentValue = event.target.value;
    this.value = this.currentValue;
  }
  render() {
    return h("input", { class: this.inputStyle, type: this.type, placeholder: this.placeholder, value: this.value, onInput: this.handleChange.bind(this) });
  }
  static get style() { return irInputCss; }
}, [0, "ir-input", {
    "placeholder": [513],
    "value": [1537],
    "type": [513],
    "inputStyle": [513, "input-style"],
    "currentValue": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-input"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrInput$1);
      }
      break;
  } });
}

const IrInput = IrInput$1;
const defineCustomElement = defineCustomElement$1;

export { IrInput, defineCustomElement };

//# sourceMappingURL=ir-input.js.map