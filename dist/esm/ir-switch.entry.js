import { r as registerInstance, c as createEvent, h } from './index-443d43b8.js';
import { v as v4 } from './v4-7b82dc75.js';

const IrSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};

export { IrSwitch as ir_switch };

//# sourceMappingURL=ir-switch.entry.js.map