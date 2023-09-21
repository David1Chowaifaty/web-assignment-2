import { r as registerInstance, c as createEvent, h } from './index-443d43b8.js';
import { v as v4 } from './v4-7b82dc75.js';

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

export { IrSelect as ir_select };

//# sourceMappingURL=ir-select.entry.js.map