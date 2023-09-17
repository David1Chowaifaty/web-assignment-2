import { h } from "@stencil/core";
import { v4 as uuidv4 } from "uuid";
// import 'jquery';
// import $ from 'jquery';
// import 'bootstrap-switch';
// import 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css';
//import './jquery-extensions';
export class IrSwitch {
  constructor() {
    this.componentId = uuidv4();
    this.value = false;
    this.labelOn = undefined;
    this.labelOff = undefined;
    this.size = undefined;
    this.switch_animate = undefined;
    this.disabled = undefined;
    this.readonly = undefined;
    this.indeterminate = undefined;
    this.inverse = undefined;
    this.radioAllOff = undefined;
    this.colorOn = undefined;
    this.offColor = undefined;
    this.classOn = undefined;
    this.offClass = undefined;
    this.labelText = undefined;
    this.handleWidth = undefined;
    this.labelWidth = undefined;
    this.baseClass = undefined;
    this.wrapperClass = undefined;
  }
  componentDidLoad() {
    this.testElement = $(`#${this.componentId}`);
    this.initializeSwitch();
  }
  initializeSwitch() {
    if (this.testElement && this.testElement.length) {
      // Unbind previous event listeners
      this.testElement.off('switchChange.bootstrapSwitch');
      // Initialize Bootstrap Switch with updated state and props
      this.testElement.bootstrapSwitch();
      // Add event listener for switch change
      this.testElement.on('switchChange.bootstrapSwitch', (event, state) => {
        console.log('switchChange.bootstrapSwitch', event);
        this.onSwitchChangeCallback(state);
      });
    }
  }
  onSwitchChangeCallback(state) {
    this.value = state;
    this.valueChange.emit(this.value);
  }
  render() {
    //console.log('Props', this.value);
    return h("input", { type: "checkbox", name: "my-checkbox", id: this.componentId });
  }
  static get is() { return "ir-switch"; }
  static get properties() {
    return {
      "value": {
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
        "attribute": "value",
        "reflect": false,
        "defaultValue": "false"
      },
      "labelOn": {
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
        "attribute": "label-on",
        "reflect": false
      },
      "labelOff": {
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
        "attribute": "label-off",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | 'mini' | 'small' | 'normal' | 'large'",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": false
      },
      "switch_animate": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "switch_animate",
        "reflect": false
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "disabled",
        "reflect": false
      },
      "readonly": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "readonly",
        "reflect": false
      },
      "indeterminate": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "indeterminate",
        "reflect": false
      },
      "inverse": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "inverse",
        "reflect": false
      },
      "radioAllOff": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "radio-all-off",
        "reflect": false
      },
      "colorOn": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color-on",
        "reflect": false
      },
      "offColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "off-color",
        "reflect": false
      },
      "classOn": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "class-on",
        "reflect": false
      },
      "offClass": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "off-class",
        "reflect": false
      },
      "labelText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "label-text",
        "reflect": false
      },
      "handleWidth": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | 'auto'",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "handle-width",
        "reflect": false
      },
      "labelWidth": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | 'auto'",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "label-width",
        "reflect": false
      },
      "baseClass": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "base-class",
        "reflect": false
      },
      "wrapperClass": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "wrapper-class",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "valueChange",
        "name": "valueChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=ir-switch.js.map
