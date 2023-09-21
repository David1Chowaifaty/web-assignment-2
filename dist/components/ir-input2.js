import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irInputCss = ":host{display:block}";

const IrInput = /*@__PURE__*/ proxyCustomElement(class IrInput extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.ontextchange = createEvent(this, "ontextchange", 7);
    this.label = '';
    this.icon = undefined;
    this.inputId = undefined;
    this.placeholder = undefined;
    this.value = undefined;
    this.type = undefined;
    this.containerStyle = undefined;
    this.required = undefined;
    this.visible = false;
  }
  handleChange(event) {
    this.visible = true;
    this.value = event.target.value;
    this.ontextchange.emit(this.value);
  }
  applyContainerStyle() {
    const baseClass = this.label !== '' ? 'input-group input-group-sm' : 'form-group position-relative has-icon-left';
    return `${baseClass} ${this.containerStyle}`;
  }
  render() {
    return (h(Host, null, h("fieldset", { class: this.applyContainerStyle() }, this.label && (h("div", { class: "input-group-prepend" }, h("span", { class: "input-group-text", id: this.inputId }, this.label))), h("input", { type: this.type, placeholder: this.placeholder, class: "form-control", value: this.value, onInput: event => this.handleChange(event), "aria-label": "Small", "aria-describedby": "inputGroup-sizing-sm", required: this.required }), this.icon && (h("div", { class: "form-control-position" }, h("i", { class: this.icon }, " "))))));
  }
  static get style() { return irInputCss; }
}, [0, "ir-input", {
    "label": [513],
    "icon": [513],
    "inputId": [513, "input-id"],
    "placeholder": [513],
    "value": [513],
    "type": [513],
    "containerStyle": [513, "container-style"],
    "required": [516],
    "visible": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-input"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrInput);
      }
      break;
  } });
}

export { IrInput as I, defineCustomElement as d };

//# sourceMappingURL=ir-input2.js.map