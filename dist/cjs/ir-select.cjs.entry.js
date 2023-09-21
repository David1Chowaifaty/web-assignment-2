'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3eb84c61.js');
const v4 = require('./v4-1c35741f.js');

const IrSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onselectchange = index.createEvent(this, "onselectchange", 7);
    this.selectId = v4.v4();
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
    return index.h("select", { id: this.selectId, title: "select", class: `select2 ${this.selectStyle}` });
  }
  static get watchers() { return {
    "data": ["handleDataChange"]
  }; }
};

exports.ir_select = IrSelect;

//# sourceMappingURL=ir-select.cjs.entry.js.map