import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const irCheckboxCss = ":host{display:block}";

const IrCheckbox$1 = /*@__PURE__*/ proxyCustomElement(class IrCheckbox extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.checkboxId = undefined;
    this.checkboxName = undefined;
    this.checked = undefined;
    this.checkboxStyle = undefined;
  }
  render() {
    return h("input", { class: this.checkboxStyle, checked: this.checked, type: "checkbox", name: this.checkboxName, id: this.checkboxId, "aria-label": 'checkbox' + this.checkboxId });
  }
  static get style() { return irCheckboxCss; }
}, [0, "ir-checkbox", {
    "checkboxId": [513, "checkbox-id"],
    "checkboxName": [513, "checkbox-name"],
    "checked": [1540],
    "checkboxStyle": [513, "checkbox-style"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-checkbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrCheckbox$1);
      }
      break;
  } });
}

const IrCheckbox = IrCheckbox$1;
const defineCustomElement = defineCustomElement$1;

export { IrCheckbox, defineCustomElement };

//# sourceMappingURL=ir-checkbox.js.map