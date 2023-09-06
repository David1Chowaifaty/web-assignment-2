import { r as registerInstance, c as createEvent, h, H as Host } from './index-bdc48f77.js';

const irInputCss = ":host{display:block}";

const IrInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
IrInput.style = irInputCss;

export { IrInput as ir_input };

//# sourceMappingURL=ir-input.entry.js.map