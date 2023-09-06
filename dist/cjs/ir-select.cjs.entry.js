'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d8bd83.js');

const irSelectCss = ":host{display:block}";

const IrSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onselectchange = index.createEvent(this, "onselectchange", 7);
    this.data = undefined;
    this.selectedItem = undefined;
    this.selectData = [];
  }
  componentWillLoad() {
    this.parseData();
    this.moveAttributesToSelectElement();
  }
  componentDidLoad() {
    this.initializeSelect2();
  }
  disconnectedCallback() {
    this.destroySelect2();
  }
  handleDataChange(newValue) {
    if (newValue && newValue.trim() !== '') {
      this.parseData();
    }
  }
  parseData() {
    try {
      this.selectData = JSON.parse(this.data);
    }
    catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  }
  moveAttributesToSelectElement() {
    Array.from(this.el.attributes).forEach(attribute => {
      var _a;
      if (attribute.name !== 'data') {
        (_a = this.selectRef) === null || _a === void 0 ? void 0 : _a.setAttribute(attribute.name, attribute.value);
        this.el.removeAttribute(attribute.name);
      }
    });
  }
  initializeSelect2() {
    $(this.selectRef).select2();
    $(this.selectRef).on('change', e => {
      const selectedValue = $(e.target).val().toString();
      this.onselectchange.emit(selectedValue);
      this.selectedItem = selectedValue;
    });
  }
  destroySelect2() {
    $(this.selectRef).select2('destroy');
  }
  onSelectChange(e) {
    const selectedValue = e.target.value;
    this.onselectchange.emit(selectedValue);
    this.selectedItem = selectedValue;
  }
  render() {
    return (index.h(index.Host, null, index.h("select", { ref: el => (this.selectRef = el), title: "select" }, this.selectData.map(d => (index.h("optgroup", { label: d.optgrouplabel }, d.options.map(option => (index.h("option", { value: option.value }, option.title)))))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "data": ["handleDataChange"]
  }; }
};
IrSelect.style = irSelectCss;

exports.ir_select = IrSelect;

//# sourceMappingURL=ir-select.cjs.entry.js.map