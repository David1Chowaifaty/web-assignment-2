import { r as registerInstance, c as createEvent, h } from './index-d305657b.js';

const IrButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonClicked = createEvent(this, "buttonClicked", 7);
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
    return (h("button", { type: this.type, onClick: this.handleClick.bind(this), class: `btn btn-min-width ${this.applyButtonStyle()} box-shadow-${this.shadow} ${this.glow && 'btn-glow'} ${this.buttonStyle}` }, this.icon !== '' && h("i", { class: this.icon }), this.buttonTitle));
  }
  static get watchers() { return {
    "shapeVariant": ["shapeChanged"],
    "colorVariant": ["colorChanged"]
  }; }
};

const IrLogin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "app-content container center-layout mt-2" }, h("div", { class: "content-overlay" }), h("div", { class: "content-wrapper" }, h("div", { class: "content-body" }, h("section", { class: "row flexbox-container" }, h("div", { class: "col-12 d-flex align-items-center justify-content-center" }, h("div", { class: "col-lg-4 col-md-8 col-10 box-shadow-2 p-0" }, h("div", { class: "card border-grey border-lighten-3 m-0" }, h("div", { class: "card-header border-0" }, h("div", { class: "card-title text-center" }, h("img", { src: "../../../app-assets/images/logo/logo-dark.png", alt: "branding logo" })), h("h6", { class: "card-subtitle line-on-side text-muted text-center font-small-3 pt-2" }, h("span", null, "Login with Modern"))), h("div", { class: "card-content" }, h("div", { class: "card-body" }, h("form", { class: "form-horizontal form-simple", action: "index.html", novalidate: true }, h("fieldset", { class: "form-group position-relative has-icon-left mb-0" }, h("input", { type: "text", class: "form-control", id: "user-name", placeholder: "Your Username", required: true }), h("div", { class: "form-control-position" }, h("i", { class: "la la-user" }))), h("fieldset", { class: "form-group position-relative has-icon-left" }, h("input", { type: "password", class: "form-control", id: "user-password", placeholder: "Enter Password", required: true }), h("div", { class: "form-control-position" }, h("i", { class: "la la-key" }))), h("div", { class: "form-group row" }, h("div", { class: "col-sm-6 col-12 text-center text-sm-left" }, h("fieldset", null, h("input", { type: "checkbox", id: "remember-me", class: "chk-remember" }), h("label", { htmlFor: "remember-me" }, " Remember Me"))), h("div", { class: "col-sm-6 col-12 text-center text-sm-right" }, h("a", { href: "recover-password.html", class: "card-link" }, "Forgot Password?"))), h("ir-button", { type: "submit", icon: "ft-unlock", buttonStyle: "btn-block", buttonTitle: " Login" })))), h("div", { class: "card-footer" }, h("div", { class: "" }, h("p", { class: "float-xl-left text-center m-0" }, h("a", { href: "recover-password.html", class: "card-link" }, "Recover password")), h("p", { class: "float-xl-right text-center m-0" }, "New to Moden Admin?", ' ', h("a", { href: "register-simple.html", class: "card-link" }, "Sign Up"))))))))))));
  }
};

export { IrButton as ir_button, IrLogin as ir_login };

//# sourceMappingURL=ir-button_2.entry.js.map