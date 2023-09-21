import { h } from "@stencil/core";
export class IrRegister {
  constructor() {
    this.username = undefined;
    this.password = undefined;
    this.email = undefined;
  }
  componentDidLoad() {
    this.addEventListeners();
  }
  handleClick() {
    this.linkLoginClicked.emit();
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
    this.formRef.reset();
  }
  render() {
    return (h("section", { class: "card" }, h("ir-card-header", { class: "card-header border-0", "image-source": "../../../app-assets/images/logo/logo-dark.png", "image-alt-text": "branding logo", "header-title": "Create Account" }), h("div", { class: "card-content" }, h("div", { class: "card-body" }, h("form", { ref: el => (this.formRef = el), class: "form-horizontal form-simple", novalidate: true, onSubmit: this.handleFormSubmit.bind(this) }, h("ir-input", { ref: el => (this.usernameRef = el), type: "text", icon: "la la-user", placeholder: "User Name", "container-style": "mb-1" }), h("ir-input", { ref: el => (this.emailRef = el), type: "text", icon: "la la-envelope", placeholder: "Your Email Address", required: true, "container-style": "mb-1" }), h("ir-input", { ref: el => (this.passwordRef = el), type: "password", icon: "la la-key", placeholder: "Enter Password", required: true }), h("ir-button", { class: "btn-block", type: "submit", icon: "ft-unlock", "button-style": "btn-block", "button-title": " Register", "color-variant": "info" }))), h("p", { class: "text-center" }, "Already have an account ? ", h("ir-link", { onClick: this.handleClick.bind(this), "link-title": "Log in", "link-destination": "#" })))));
  }
  static get is() { return "ir-register"; }
  static get states() {
    return {
      "username": {},
      "password": {},
      "email": {}
    };
  }
  static get events() {
    return [{
        "method": "registerClicked",
        "name": "registerClicked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "IRegister",
          "resolved": "IRegister",
          "references": {
            "IRegister": {
              "location": "import",
              "path": "../../model/Register",
              "id": "src/model/Register.ts::IRegister"
            }
          }
        }
      }, {
        "method": "linkLoginClicked",
        "name": "linkLoginClicked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=ir-register.js.map
