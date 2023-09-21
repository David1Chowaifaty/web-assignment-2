import { Fragment, h } from "@stencil/core";
export class IrButton {
  constructor() {
    this.type = 'button';
    this.buttonTitle = '';
    this.icon = '';
    this.buttonStyle = '';
    this.colorVariant = 'primary';
    this.shadow = '';
    this.glow = undefined;
    this.shapeVariant = 'default';
  }
  shapeChanged() {
    this.applyButtonStyle();
  }
  colorChanged() {
    this.applyButtonStyle();
  }
  applyButtonStyle() {
    switch (this.shapeVariant) {
      case 'round':
        return `btn-${this.colorVariant} round`;
      case 'square':
        return `btn-${this.colorVariant} square`;
      case 'outline':
        return `btn-outline-${this.colorVariant}`;
      default:
        return `btn-${this.colorVariant}`;
    }
  }
  handleClick() {
    this.buttonClicked.emit();
  }
  render() {
    let shadow = '';
    if (this.shadow !== '') {
      shadow = `box-shadow-${this.shadow}`;
    }
    return (h("button", { type: this.type, onClick: this.handleClick.bind(this), class: `btn ${this.applyButtonStyle()} ${this.buttonStyle} ${shadow} ${this.glow ? 'btn-glow' : ''} ` }, this.icon !== '' && (h(Fragment, null, h("i", { class: this.icon }), "\u00A0")), this.buttonTitle));
  }
  static get is() { return "ir-button"; }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'button' | 'submit' | 'reset'",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'button'"
      },
      "buttonTitle": {
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
        "attribute": "button-title",
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
        "reflect": true,
        "defaultValue": "''"
      },
      "buttonStyle": {
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
        "attribute": "button-style",
        "reflect": true,
        "defaultValue": "''"
      },
      "colorVariant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'",
          "resolved": "\"danger\" | \"dark\" | \"info\" | \"light\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color-variant",
        "reflect": true,
        "defaultValue": "'primary'"
      },
      "shadow": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'' | '1' | '2' | '3' | '4' | '5'",
          "resolved": "\"\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "shadow",
        "reflect": true,
        "defaultValue": "''"
      },
      "glow": {
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
        "attribute": "glow",
        "reflect": true
      },
      "shapeVariant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'default' | 'round' | 'square' | 'outline'",
          "resolved": "\"default\" | \"outline\" | \"round\" | \"square\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "shape-variant",
        "reflect": true,
        "defaultValue": "'default'"
      }
    };
  }
  static get events() {
    return [{
        "method": "buttonClicked",
        "name": "buttonClicked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "shapeVariant",
        "methodName": "shapeChanged"
      }, {
        "propName": "colorVariant",
        "methodName": "colorChanged"
      }];
  }
}
//# sourceMappingURL=ir-button.js.map
