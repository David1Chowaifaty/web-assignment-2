import { r as registerInstance, c as createEvent, h } from './index-d305657b.js';

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

const IrSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onselectchange = createEvent(this, "onselectchange", 7);
    this.selectId = v4();
    this.handleSelect = (event) => {
      const selectedValue = event.params.data.id;
      this.selectedItem = selectedValue;
      this.onselectchange.emit(selectedValue);
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
  static get watchers() { return {
    "data": ["handleDataChange"]
  }; }
};

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

export { IrSelect as ir_select, IrSwitch as ir_switch };

//# sourceMappingURL=ir-select_2.entry.js.map