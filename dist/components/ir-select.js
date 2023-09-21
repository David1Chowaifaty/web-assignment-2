import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { v as v4 } from './v4.js';

const IrSelect$1 = /*@__PURE__*/ proxyCustomElement(class IrSelect extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.onselectchange = createEvent(this, "onselectchange", 7);
    this.selectId = v4();
    this.handleSelect = (event) => {
      const selectedValue = event.params.data.id;
      this.selectedItem = selectedValue;
      this.onselectchange.emit(selectedValue);
    };
    this.data = undefined;
    this.selectedItem = undefined;
    this.selectStyle = undefined;
    this.selectData = [];
  }
  componentWillLoad() {
    this.parseData();
  }
  componentDidLoad() {
    this.testElement = $(`#${this.selectId}`);
    this.initializeSelect2();
  }
  handleDataChange(newValue) {
    if (newValue && newValue.trim() !== '') {
      this.parseData();
    }
  }
  parseData() {
    if (typeof this.data === 'string') {
      try {
        this.selectData = JSON.parse(this.data);
      }
      catch (error) {
        console.error(`Error parsing JSON data: ${error}`);
      }
    }
    else {
      this.selectData = this.data;
    }
  }
  initializeSelect2() {
    if (!this.testElement || !this.testElement.length) {
      console.warn('Element not found');
      return;
    }
    this.testElement.select2({
      data: this.selectData,
    });
    this.testElement.on('select2:select', this.handleSelect);
  }
  render() {
    return h("select", { id: this.selectId, title: "select", class: `select2 ${this.selectStyle}` });
  }
  static get watchers() { return {
    "data": ["handleDataChange"]
  }; }
}, [0, "ir-select", {
    "data": [513],
    "selectedItem": [1537, "selected-item"],
    "selectStyle": [513, "select-style"],
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