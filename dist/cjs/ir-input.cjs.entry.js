'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e7480c96.js');

const irInputCss = ":host{display:block}";

const IrInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ontextchange = index.createEvent(this, "ontextchange", 7);
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
    return (index.h(index.Host, null, index.h("fieldset", { class: this.applyContainerStyle() }, this.label && (index.h("div", { class: "input-group-prepend" }, index.h("span", { class: "input-group-text", id: this.inputId }, this.label))), index.h("input", { type: this.type, placeholder: this.placeholder, class: "form-control", value: this.value, onInput: event => this.handleChange(event), "aria-label": "Small", "aria-describedby": "inputGroup-sizing-sm", required: this.required }), this.icon && (index.h("div", { class: "form-control-position" }, index.h("i", { class: this.icon }, " "))))));
  }
};
IrInput.style = irInputCss;

exports.ir_input = IrInput;

//# sourceMappingURL=ir-input.cjs.entry.js.map