import { Host, h } from "@stencil/core";
export class IrInput {
  constructor() {
    this.label = '';
    this.icon = undefined;
    this.inputId = undefined;
    this.placeholder = undefined;
    this.value = undefined;
    this.type = undefined;
    this.containerStyle = undefined;
    this.required = undefined;
    this.visible = false;
  }
  handleChange(event) {
    this.visible = true;
    this.value = event.target.value;
    this.ontextchange.emit(this.value);
  }
  applyContainerStyle() {
    const baseClass = this.label !== '' ? 'input-group input-group-sm' : 'form-group position-relative has-icon-left';
    return `${baseClass} ${this.containerStyle}`;
  }
  render() {
    return (h(Host, null, h("fieldset", { class: this.applyContainerStyle() }, this.label && (h("div", { class: "input-group-prepend" }, h("span", { class: "input-group-text", id: this.inputId }, this.label))), h("input", { type: this.type, placeholder: this.placeholder, class: "form-control", value: this.value, onInput: event => this.handleChange(event), "aria-label": "Small", "aria-describedby": "inputGroup-sizing-sm", required: this.required }), this.icon && (h("div", { class: "form-control-position" }, h("i", { class: this.icon }, " "))))));
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
      "label": {
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
        "attribute": "label",
        "reflect": true,
        "defaultValue": "''"
      },
      "icon": {
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
        "attribute": "icon",
        "reflect": true
      },
      "inputId": {
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
        "attribute": "input-id",
        "reflect": true
      },
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
      "containerStyle": {
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
        "attribute": "container-style",
        "reflect": true
      },
      "required": {
        "type": "boolean",
        "mutable": false,
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
        "attribute": "required",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "visible": {}
    };
  }
  static get events() {
    return [{
        "method": "ontextchange",
        "name": "ontextchange",
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
}
//# sourceMappingURL=ir-input.js.map
