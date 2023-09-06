import { r as registerInstance, h } from './index-fe493b20.js';

const irInputCss = ":host{display:block}";

const IrInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
IrInput.style = irInputCss;

export { IrInput as ir_input };

//# sourceMappingURL=ir-input.entry.js.map