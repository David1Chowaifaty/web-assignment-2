import { r as registerInstance, c as createEvent, h, H as Host } from './index-d305657b.js';

const irInputCss = ":host{display:block}";

const IrInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ontextchange = createEvent(this, "ontextchange", 7);
    this.label = undefined;
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
};
IrInput.style = irInputCss;

export { IrInput as ir_input };

//# sourceMappingURL=ir-input.entry.js.map