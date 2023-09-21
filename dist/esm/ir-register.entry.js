import { r as registerInstance, c as createEvent, h } from './index-443d43b8.js';

const IrRegister = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.registerClicked = createEvent(this, "registerClicked", 7);
    this.username = undefined;
    this.password = undefined;
    this.email = undefined;
  }
  handleClick() { }
  componentDidLoad() {
    this.addEventListeners();
  }
  addEventListeners() {
    this.usernameRef.addEventListener('ontextchange', this.handleUsernameChange.bind(this));
    this.passwordRef.addEventListener('ontextchange', this.handlePasswordChange.bind(this));
    this.emailRef.addEventListener('ontextchange', this.handleEmailChange.bind(this));
  }
  handleUsernameChange(e) {
    this.username = e.detail;
  }
  handlePasswordChange(e) {
    this.password = e.detail;
  }
  handleEmailChange(e) {
    this.email = e.detail;
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.emitRegisterData();
  }
  emitRegisterData() {
    this.registerClicked.emit({
      email: this.email,
      password: this.password,
      username: this.username,
    });
  }
  render() {
    return (h("div", { class: "app-content container center-layout mt-2" }, h("div", { class: "content-overlay" }), h("div", { class: "content-wrapper" }, h("div", { class: "content-header row" }), h("div", { class: "content-body" }, h("section", { class: "row flexbox-container" }, h("div", { class: "col-12 d-flex align-items-center justify-content-center" }, h("div", { class: "col-lg-4 col-md-8 col-10 box-shadow-2 p-0" }, h("div", { class: "card border-grey border-lighten-3 px-2 py-2 m-0" }, h("ir-card-header", { class: "card-header border-0", "image-source": "../../../app-assets/images/logo/logo-dark.png", "image-alt-text": "branding logo", "header-title": "Create Account" }), h("div", { class: "card-content" }, h("div", { class: "card-body" }, h("form", { class: "form-horizontal form-simple", novalidate: true }, h("ir-input", { ref: el => (this.usernameRef = el), type: "text", icon: "la la-user", placeholder: "User Name", "container-style": "mb-1" }), h("ir-input", { ref: el => (this.emailRef = el), type: "text", icon: "la la-envelope", placeholder: "Your Email Address", required: true, "container-style": "mb-1" }), h("ir-input", { ref: el => (this.passwordRef = el), type: "password", icon: "la la-key", placeholder: "Enter Password", required: true }), h("ir-button", { class: "btn-block", type: "submit", icon: "ft-unlock", "button-style": "btn-block", "button-title": " Register", "color-variant": "info" }))), h("p", { class: "text-center" }, "Already have an account ? ", h("ir-link", { onClick: this.handleClick.bind(this), "link-title": "LogIn", "link-destination": "#" })))))))))));
  }
};

export { IrRegister as ir_register };

//# sourceMappingURL=ir-register.entry.js.map