import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrSelect {
  constructor() {
    this.selectId = v4();
    this.handleSelect = (event) => {
      const selectedValue = event.params.data.id;
      this.onselectchange.emit(selectedValue);
      this.selectedItem = selectedValue;
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
  static get is() { return "ir-select"; }
  static get properties() {
    return {
      "data": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | DataFormat[] | GroupedDataFormat[]",
          "resolved": "DataFormat[] | GroupedDataFormat[] | string",
          "references": {
            "DataFormat": {
              "location": "import",
              "path": "select2",
              "id": ""
            },
            "GroupedDataFormat": {
              "location": "import",
              "path": "select2",
              "id": ""
            }
          }
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
      },
      "selectStyle": {
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
        "attribute": "select-style",
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
  static get watchers() {
    return [{
        "propName": "data",
        "methodName": "handleDataChange"
      }];
  }
}
//# sourceMappingURL=ir-select.js.map
