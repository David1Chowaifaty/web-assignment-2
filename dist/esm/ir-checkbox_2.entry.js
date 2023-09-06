import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-34648cd5.js';

const irCheckboxCss = ":host{display:block}";

const IrCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.oncheckchange = createEvent(this, "oncheckchange", 7);
    this.label = '';
    this.inputId = '';
    this.checkboxStyle = undefined;
    this.disabled = undefined;
    this.labelStyle = undefined;
    this.containerStyle = undefined;
    this.checked = undefined;
    this.labelShown = false;
  }
  componentWillLoad() {
    this.setLabelShown();
  }
  onLabelChange() {
    this.setLabelShown();
  }
  setLabelShown() {
    if (this.label !== '' && this.inputId !== '') {
      this.labelShown = true;
    }
    else {
      this.labelShown = false;
    }
  }
  handleChange(event) {
    const isChecked = event.target.checked;
    this.checked = isChecked;
    this.oncheckchange.emit(isChecked);
  }
  render() {
    return (h(Host, null, h("input", { type: "checkbox", disabled: this.disabled, onChange: this.handleChange.bind(this), checked: this.checked, class: this.checkboxStyle, id: this.inputId }), this.labelShown && (h("label", { class: this.labelStyle, htmlFor: this.inputId }, this.label))));
  }
  static get watchers() { return {
    "label": ["onLabelChange"]
  }; }
};
IrCheckbox.style = irCheckboxCss;

const irSelectCss = ":host{display:block}";

const IrSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onselectchange = createEvent(this, "onselectchange", 7);
    this.data = undefined;
    this.selectName = undefined;
    this.selectStyle = undefined;
    this.selectTitle = undefined;
    this.disabled = undefined;
    this.selectedItem = undefined;
    this.selectData = undefined;
    this.parentAttributes = [];
  }
  componentWillLoad() {
    this.setSelectData();
    Array.from(this.el.attributes).forEach(attribute => {
      if (attribute.name !== 'data') {
        this.parentAttributes.push({ name: attribute.name, value: attribute.value });
        this.el.removeAttribute(attribute.name);
      }
    });
  }
  componentDidLoad() {
    this.parentAttributes.forEach(attribute => {
      this.selectRef.setAttribute(attribute.name, attribute.value);
    });
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.parentAttributes.forEach(attribute => {
      if (attribute.name === name) {
        if (oldValue != newValue) {
          attribute.value = newValue;
        }
      }
    });
  }
  static get observedAttributes() {
    return ['class', 'data-select2-id', 'tabindex', 'aria-hidden'];
  }
  handleDataChange(newValue, _oldValue) {
    if (newValue !== _oldValue && newValue !== '') {
      this.setSelectData();
    }
  }
  setSelectData() {
    try {
      if (this.data && this.data.trim() !== '') {
        this.selectData = JSON.parse(this.data);
      }
    }
    catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  }
  onSelectChange(e) {
    const selectedValue = e.target.value;
    this.onselectchange.emit(selectedValue);
    this.selectedItem = selectedValue;
  }
  render() {
    return (h(Host, null, h("select", { ref: el => (this.selectRef = el), disabled: this.disabled, onChange: this.onSelectChange.bind(this), title: this.selectTitle }, this.selectData.map(d => (h("optgroup", { label: d.optgrouplabel }, d.options.map(option => (h("option", { value: option.value }, option.title)))))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "data": ["handleDataChange"]
  }; }
};
IrSelect.style = irSelectCss;

export { IrCheckbox as ir_checkbox, IrSelect as ir_select };

//# sourceMappingURL=ir-checkbox_2.entry.js.map