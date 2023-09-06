import { h } from "@stencil/core";
export class IrCheckbox {
  constructor() {
    this.checkboxId = undefined;
    this.checkboxName = undefined;
    this.checked = undefined;
    this.checkboxStyle = undefined;
  }
  render() {
    return h("input", { class: this.checkboxStyle, checked: this.checked, type: "checkbox", name: this.checkboxName, id: this.checkboxId, "aria-label": 'checkbox' + this.checkboxId });
  }
  static get is() { return "ir-checkbox"; }
  static get originalStyleUrls() {
    return {
      "$": ["ir-checkbox.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ir-checkbox.css"]
    };
  }
  static get properties() {
    return {
      "checkboxId": {
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
        "attribute": "checkbox-id",
        "reflect": true
      },
      "checkboxName": {
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
        "attribute": "checkbox-name",
        "reflect": true
      },
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "checked",
        "reflect": true
      },
      "checkboxStyle": {
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
        "attribute": "checkbox-style",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=ir-checkbox.js.map
