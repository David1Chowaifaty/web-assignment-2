'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-05915ff6.js');

const IrButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
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
    return (index.h("button", { type: this.type, onClick: this.handleClick.bind(this), class: `btn ${this.applyButtonStyle()} ${this.buttonStyle} ${shadow} ${this.glow ? 'btn-glow' : ''} ` }, this.icon !== '' && (index.h(index.Fragment, null, index.h("i", { class: this.icon }), "\u00A0")), this.buttonTitle));
  }
  static get watchers() { return {
    "shapeVariant": ["shapeChanged"],
    "colorVariant": ["colorChanged"]
  }; }
};

const irCheckboxCss = ":host{display:block}";

const IrCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.oncheckchange = index.createEvent(this, "oncheckchange", 7);
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
    return (index.h(index.Host, null, index.h("input", { type: "checkbox", disabled: this.disabled, onChange: this.handleChange.bind(this), checked: this.checked, class: this.checkboxStyle, id: this.inputId }), this.labelShown && (index.h("label", { class: this.labelStyle, htmlFor: this.inputId }, this.label))));
  }
  static get watchers() { return {
    "label": ["onLabelChange"]
  }; }
};
IrCheckbox.style = irCheckboxCss;

const irInputCss = ":host{display:block}";

const IrInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ontextchange = index.createEvent(this, "ontextchange", 7);
    this.label = undefined;
    this.icon = undefined;
    this.inputId = undefined;
    this.placeholder = undefined;
    this.value = undefined;
    this.type = undefined;
    this.containerStyle = undefined;
    this.required = undefined;
    this.visible = false;
  }
  handleChange(event) {
    this.visible = true;
    this.value = event.target.value;
    this.ontextchange.emit(this.value);
  }
  applyContainerStyle() {
    const baseClass = this.label !== '' ? 'input-group input-group-sm' : 'form-group position-relative has-icon-left';
    return `${baseClass} ${this.containerStyle}`;
  }
  render() {
    return (index.h(index.Host, null, index.h("fieldset", { class: this.applyContainerStyle() }, this.label && (index.h("div", { class: "input-group-prepend" }, index.h("span", { class: "input-group-text", id: this.inputId }, this.label))), index.h("input", { type: this.type, placeholder: this.placeholder, class: "form-control", value: this.value, onInput: event => this.handleChange(event), "aria-label": "Small", "aria-describedby": "inputGroup-sizing-sm", required: this.required }), this.icon && (index.h("div", { class: "form-control-position" }, index.h("i", { class: this.icon }, " "))))));
  }
};
IrInput.style = irInputCss;

const IrLogin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "app-content container center-layout mt-2" }, index.h("div", { class: "content-overlay" }), index.h("div", { class: "content-wrapper" }, index.h("div", { class: "content-body" }, index.h("section", { class: "row flexbox-container" }, index.h("div", { class: "col-12 d-flex align-items-center justify-content-center" }, index.h("div", { class: "col-lg-4 col-md-8 col-10 box-shadow-2 p-0" }, index.h("div", { class: "card border-grey border-lighten-3 m-0" }, index.h("div", { class: "card-header border-0" }, index.h("div", { class: "card-title text-center" }, index.h("img", { src: "../../../app-assets/images/logo/logo-dark.png", alt: "branding logo" })), index.h("h6", { class: "card-subtitle line-on-side text-muted text-center font-small-3 pt-2" }, index.h("span", null, "Login with Modern"))), index.h("div", { class: "card-content" }, index.h("div", { class: "card-body" }, index.h("form", { class: "form-horizontal form-simple", novalidate: true }, index.h("ir-input", { type: "text", icon: "la la-user", placeholder: "Your Username", required: true, "container-style": "mb-0" }), index.h("ir-input", { type: "password", icon: "la la-key", placeholder: "Enter Password", required: true }), index.h("div", { class: "form-group row" }, index.h("ir-checkbox", { class: "col-sm-6 col-12 text-center text-sm-left", label: " Remember Me", "input-id": "remember-me", "checkbox-style": "chk-remember" }), index.h("div", { class: "col-sm-6 col-12 text-center text-sm-right" }, index.h("a", { href: "recover-password.html", class: "card-link" }, "Forgot Password?"))), index.h("ir-button", { class: "btn-block", type: "submit", icon: "ft-unlock", "button-style": "btn-block", "button-title": " Login", "color-variant": "info" })))), index.h("div", { class: "card-footer" }, index.h("div", { class: "" }, index.h("p", { class: "float-xl-left text-center m-0" }, index.h("a", { href: "recover-password.html", class: "card-link" }, "Recover password")), index.h("p", { class: "float-xl-right text-center m-0" }, "New to Moden Admin?", ' ', index.h("a", { href: "register-simple.html", class: "card-link" }, "Sign Up"))))))))))));
  }
};

exports.ir_button = IrButton;
exports.ir_checkbox = IrCheckbox;
exports.ir_input = IrInput;
exports.ir_login = IrLogin;

//# sourceMappingURL=ir-button_4.cjs.entry.js.map