import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { v as v4 } from './v4.js';

const IrSwitch$1 = /*@__PURE__*/ proxyCustomElement(class IrSwitch extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.valueChange = createEvent(this, "valueChange", 7);
    this.componentId = v4();
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
}, [0, "ir-switch", {
    "value": [1028],
    "labelOn": [1, "label-on"],
    "labelOff": [1, "label-off"],
    "size": [1],
    "switch_animate": [4],
    "disabled": [4],
    "readonly": [4],
    "indeterminate": [4],
    "inverse": [4],
    "radioAllOff": [4, "radio-all-off"],
    "colorOn": [1, "color-on"],
    "offColor": [1, "off-color"],
    "classOn": [1, "class-on"],
    "offClass": [1, "off-class"],
    "labelText": [1, "label-text"],
    "handleWidth": [1, "handle-width"],
    "labelWidth": [1, "label-width"],
    "baseClass": [1, "base-class"],
    "wrapperClass": [1, "wrapper-class"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-switch"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-switch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrSwitch$1);
      }
      break;
  } });
}

const IrSwitch = IrSwitch$1;
const defineCustomElement = defineCustomElement$1;

export { IrSwitch, defineCustomElement };

//# sourceMappingURL=ir-switch.js.map