'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e7480c96.js');

const IrButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
    this.type = 'button';
    this.buttonTitle = '';
    this.icon = '';
    this.buttonStyle = '';
    this.colorVariant = 'primary';
    this.shadow = '0';
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
    return (index.h("button", { type: this.type, onClick: this.handleClick.bind(this), class: `btn btn-min-width ${this.applyButtonStyle()} box-shadow-${this.shadow} ${this.glow && 'btn-glow'} ${this.buttonStyle}` }, this.icon !== '' && index.h("i", { class: this.icon }), this.buttonTitle));
  }
  static get watchers() { return {
    "shapeVariant": ["shapeChanged"],
    "colorVariant": ["colorChanged"]
  }; }
};

const IrLogin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "app-content container center-layout mt-2" }, index.h("div", { class: "content-overlay" }), index.h("div", { class: "content-wrapper" }, index.h("div", { class: "content-body" }, index.h("section", { class: "row flexbox-container" }, index.h("div", { class: "col-12 d-flex align-items-center justify-content-center" }, index.h("div", { class: "col-lg-4 col-md-8 col-10 box-shadow-2 p-0" }, index.h("div", { class: "card border-grey border-lighten-3 m-0" }, index.h("div", { class: "card-header border-0" }, index.h("div", { class: "card-title text-center" }, index.h("img", { src: "../../../app-assets/images/logo/logo-dark.png", alt: "branding logo" })), index.h("h6", { class: "card-subtitle line-on-side text-muted text-center font-small-3 pt-2" }, index.h("span", null, "Login with Modern"))), index.h("div", { class: "card-content" }, index.h("div", { class: "card-body" }, index.h("form", { class: "form-horizontal form-simple", action: "index.html", novalidate: true }, index.h("fieldset", { class: "form-group position-relative has-icon-left mb-0" }, index.h("input", { type: "text", class: "form-control", id: "user-name", placeholder: "Your Username", required: true }), index.h("div", { class: "form-control-position" }, index.h("i", { class: "la la-user" }))), index.h("fieldset", { class: "form-group position-relative has-icon-left" }, index.h("input", { type: "password", class: "form-control", id: "user-password", placeholder: "Enter Password", required: true }), index.h("div", { class: "form-control-position" }, index.h("i", { class: "la la-key" }))), index.h("div", { class: "form-group row" }, index.h("div", { class: "col-sm-6 col-12 text-center text-sm-left" }, index.h("fieldset", null, index.h("input", { type: "checkbox", id: "remember-me", class: "chk-remember" }), index.h("label", { htmlFor: "remember-me" }, " Remember Me"))), index.h("div", { class: "col-sm-6 col-12 text-center text-sm-right" }, index.h("a", { href: "recover-password.html", class: "card-link" }, "Forgot Password?"))), index.h("ir-button", { type: "submit", icon: "ft-unlock", buttonStyle: "btn-block", buttonTitle: " Login" })))), index.h("div", { class: "card-footer" }, index.h("div", { class: "" }, index.h("p", { class: "float-xl-left text-center m-0" }, index.h("a", { href: "recover-password.html", class: "card-link" }, "Recover password")), index.h("p", { class: "float-xl-right text-center m-0" }, "New to Moden Admin?", ' ', index.h("a", { href: "register-simple.html", class: "card-link" }, "Sign Up"))))))))))));
  }
};

exports.ir_button = IrButton;
exports.ir_login = IrLogin;

//# sourceMappingURL=ir-button_2.cjs.entry.js.map