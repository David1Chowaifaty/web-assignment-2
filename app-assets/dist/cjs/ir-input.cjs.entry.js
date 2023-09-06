'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f956d12b.js');

const irInputCss = ":host{display:block}";

const IrInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("input", { class: this.inputStyle, type: this.type, placeholder: this.placeholder, value: this.value, onInput: this.handleChange.bind(this) });
  }
};
IrInput.style = irInputCss;

exports.ir_input = IrInput;

//# sourceMappingURL=ir-input.cjs.entry.js.map