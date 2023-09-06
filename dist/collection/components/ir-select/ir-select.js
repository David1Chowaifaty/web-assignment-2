import { Host, h } from "@stencil/core";
export class IrSelect {
  constructor() {
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
  static get is() { return "ir-select"; }
  static get originalStyleUrls() {
    return {
      "$": ["ir-select.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ir-select.css"]
    };
  }
  static get properties() {
    return {
      "data": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "data",
        "reflect": true
      },
      "selectedItem": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "selected-item",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "selectData": {}
    };
  }
  static get events() {
    return [{
        "method": "onselectchange",
        "name": "onselectchange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "data",
        "methodName": "handleDataChange"
      }];
  }
}
//# sourceMappingURL=ir-select.js.map
