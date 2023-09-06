import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irSelectCss = ":host{display:block}";

const IrSelect$1 = /*@__PURE__*/ proxyCustomElement(class IrSelect extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.onselectchange = createEvent(this, "onselectchange", 7);
    this.data = undefined;
    this.selectedItem = undefined;
    this.selectData = [];
  }
  componentWillLoad() {
    this.parseData();
    this.moveAttributesToSelectElement();
  }
  componentDidLoad() {
    this.initializeSelect2();
  }
  disconnectedCallback() {
    this.destroySelect2();
  }
  handleDataChange(newValue) {
    if (newValue && newValue.trim() !== '') {
      this.parseData();
    }
  }
  parseData() {
    try {
      this.selectData = JSON.parse(this.data);
    }
    catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  }
  moveAttributesToSelectElement() {
    Array.from(this.el.attributes).forEach(attribute => {
      var _a;
      if (attribute.name !== 'data') {
        (_a = this.selectRef) === null || _a === void 0 ? void 0 : _a.setAttribute(attribute.name, attribute.value);
        this.el.removeAttribute(attribute.name);
      }
    });
  }
  initializeSelect2() {
    $(this.selectRef).select2();
    $(this.selectRef).on('change', e => {
      const selectedValue = $(e.target).val().toString();
      this.onselectchange.emit(selectedValue);
      this.selectedItem = selectedValue;
    });
  }
  destroySelect2() {
    $(this.selectRef).select2('destroy');
  }
  onSelectChange(e) {
    const selectedValue = e.target.value;
    this.onselectchange.emit(selectedValue);
    this.selectedItem = selectedValue;
  }
  render() {
    return (h(Host, null, h("select", { ref: el => (this.selectRef = el), title: "select" }, this.selectData.map(d => (h("optgroup", { label: d.optgrouplabel }, d.options.map(option => (h("option", { value: option.value }, option.title)))))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "data": ["handleDataChange"]
  }; }
  static get style() { return irSelectCss; }
}, [0, "ir-select", {
    "data": [513],
    "selectedItem": [1537, "selected-item"],
    "selectData": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-select"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrSelect$1);
      }
      break;
  } });
}

const IrSelect = IrSelect$1;
const defineCustomElement = defineCustomElement$1;

export { IrSelect, defineCustomElement };

//# sourceMappingURL=ir-select.js.map