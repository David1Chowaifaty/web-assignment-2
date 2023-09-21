'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3eb84c61.js');
const v4 = require('./v4-1c35741f.js');

const IrSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChange = index.createEvent(this, "valueChange", 7);
    this.componentId = v4.v4();
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
    return index.h("input", { type: "checkbox", name: "my-checkbox", id: this.componentId });
  }
};

exports.ir_switch = IrSwitch;

//# sourceMappingURL=ir-switch.cjs.entry.js.map