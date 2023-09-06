import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irInputCss = ":host{display:block}";

const IrInput$1 = /*@__PURE__*/ proxyCustomElement(class IrInput extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.ontextchange = createEvent(this, "ontextchange", 7);
    this.containerStyle = undefined;
    this.labelStyle = undefined;
    this.inputStyle = undefined;
    this.label = undefined;
    this.inputId = undefined;
    this.placeholder = undefined;
    this.value = undefined;
    this.type = undefined;
    this.visible = false;
  }
  handleChange(event) {
    this.visible = true;
    this.value = event.target.value;
    this.ontextchange.emit(this.value);
  }
  render() {
    return (h(Host, null, h("div", { class: this.containerStyle }, h("span", { class: this.labelStyle, id: this.inputId }, this.label)), h("input", { type: this.type, placeholder: this.placeholder, class: this.inputStyle, value: this.value, onInput: event => this.handleChange(event), "aria-label": "Small", "aria-describedby": "inputGroup-sizing-sm" })));
  }
  static get style() { return irInputCss; }
}, [0, "ir-input", {
    "containerStyle": [513, "container-style"],
    "labelStyle": [513, "label-style"],
    "inputStyle": [513, "input-style"],
    "label": [513],
    "inputId": [513, "input-id"],
    "placeholder": [513],
    "value": [513],
    "type": [513],
    "visible": [32]
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