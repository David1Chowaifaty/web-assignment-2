'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e7480c96.js');

const irInputCss = ":host{display:block}";

const IrInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ontextchange = index.createEvent(this, "ontextchange", 7);
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
    return (index.h(index.Host, null, index.h("div", { class: this.containerStyle }, index.h("span", { class: this.labelStyle, id: this.inputId }, this.label)), index.h("input", { type: this.type, placeholder: this.placeholder, class: this.inputStyle, value: this.value, onInput: event => this.handleChange(event), "aria-label": "Small", "aria-describedby": "inputGroup-sizing-sm" })));
  }
};
IrInput.style = irInputCss;

exports.ir_input = IrInput;

//# sourceMappingURL=ir-input.cjs.entry.js.map