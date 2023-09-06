'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f956d12b.js');

const irCheckboxCss = ":host{display:block}";

const IrCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.checkboxId = undefined;
    this.checkboxName = undefined;
    this.checked = undefined;
    this.checkboxStyle = undefined;
  }
  render() {
    return index.h("input", { class: this.checkboxStyle, checked: this.checked, type: "checkbox", name: this.checkboxName, id: this.checkboxId, "aria-label": 'checkbox' + this.checkboxId });
  }
};
IrCheckbox.style = irCheckboxCss;

exports.ir_checkbox = IrCheckbox;

//# sourceMappingURL=ir-checkbox.cjs.entry.js.map