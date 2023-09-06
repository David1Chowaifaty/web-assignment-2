import { r as registerInstance, h } from './index-fe493b20.js';

const irCheckboxCss = ":host{display:block}";

const IrCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkboxId = undefined;
    this.checkboxName = undefined;
    this.checked = undefined;
    this.checkboxStyle = undefined;
  }
  render() {
    return h("input", { class: this.checkboxStyle, checked: this.checked, type: "checkbox", name: this.checkboxName, id: this.checkboxId, "aria-label": 'checkbox' + this.checkboxId });
  }
};
IrCheckbox.style = irCheckboxCss;

export { IrCheckbox as ir_checkbox };

//# sourceMappingURL=ir-checkbox.entry.js.map