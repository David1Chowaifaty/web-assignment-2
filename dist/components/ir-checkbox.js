import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irCheckboxCss = ":host{display:block}";

const IrCheckbox$1 = /*@__PURE__*/ proxyCustomElement(class IrCheckbox extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.oncheckchange = createEvent(this, "oncheckchange", 7);
    this.label = '';
    this.inputId = '';
    this.checkboxStyle = undefined;
    this.disabled = undefined;
    this.labelStyle = undefined;
    this.containerStyle = undefined;
    this.checked = undefined;
    this.labelShown = false;
  }
  componentWillLoad() {
    this.setLabelShown();
  }
  onLabelChange() {
    this.setLabelShown();
  }
  setLabelShown() {
    if (this.label !== '' && this.inputId !== '') {
      this.labelShown = true;
    }
    else {
      this.labelShown = false;
    }
  }
  handleChange(event) {
    const isChecked = event.target.checked;
    this.checked = isChecked;
    this.oncheckchange.emit(isChecked);
  }
  render() {
    return (h(Host, null, h("input", { type: "checkbox", disabled: this.disabled, onChange: this.handleChange.bind(this), checked: this.checked, class: this.checkboxStyle, id: this.inputId }), this.labelShown && (h("label", { class: this.labelStyle, htmlFor: this.inputId }, this.label))));
  }
  static get watchers() { return {
    "label": ["onLabelChange"]
  }; }
  static get style() { return irCheckboxCss; }
}, [0, "ir-checkbox", {
    "label": [513],
    "inputId": [513, "input-id"],
    "checkboxStyle": [513, "checkbox-style"],
    "disabled": [516],
    "labelStyle": [513, "label-style"],
    "containerStyle": [513, "container-style"],
    "checked": [1540],
    "labelShown": [32]
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