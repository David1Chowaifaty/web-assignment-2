import { h } from "@stencil/core";
export class IrInput {
  constructor() {
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
  static get is() { return "ir-input"; }
  static get originalStyleUrls() {
    return {
      "$": ["ir-input.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ir-input.css"]
    };
  }
  static get properties() {
    return {
      "placeholder": {
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
        "attribute": "placeholder",
        "reflect": true
      },
      "value": {
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
        "attribute": "value",
        "reflect": true
      },
      "type": {
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
        "attribute": "type",
        "reflect": true
      },
      "inputStyle": {
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
        "attribute": "input-style",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "currentValue": {}
    };
  }
}
//# sourceMappingURL=ir-input.js.map
