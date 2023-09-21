import { Host, h } from "@stencil/core";
export class IrLogin {
  constructor() {
    this.username = undefined;
    this.password = undefined;
    this.isChecked = false;
    this.isSidebarOpened = false;
  }
  componentDidLoad() {
    this.attachEventListeners();
  }
  attachEventListeners() {
    this.usernameRef.addEventListener('ontextchange', this.updateUsername.bind(this));
    this.passwordRef.addEventListener('ontextchange', this.updatePassword.bind(this));
    this.checkboxRef.addEventListener('oncheckchange', this.updateCheckboxStatus.bind(this));
  }
  handleSidebarToggle() {
    this.toggleSidebar();
  }
  handleLoginClick() {
    this.toggleSidebar();
  }
  handleRegisterClick(e) {
    this.loginRegisterClicked.emit(e.detail);
    this.toggleSidebar();
  }
  updateUsername(e) {
    this.username = e.detail;
  }
  updatePassword(e) {
    this.password = e.detail;
  }
  updateCheckboxStatus(e) {
    this.isChecked = e.detail;
  }
  toggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.emitLoginData();
    this.formRef.reset();
  }
  emitLoginData() {
    this.loginClicked.emit({
      isChecked: this.isChecked,
      password: this.password,
      username: this.username,
    });
  }
  render() {
    return (h(Host, null, h("div", { class: "app-content container center-layout mt-2" }, h("div", { class: "content-overlay" }), h("div", { class: "content-wrapper" }, h("div", { class: "content-body" }, h("section", { class: "row flexbox-container" }, h("div", { class: "col-12 d-flex align-items-center justify-content-center" }, h("div", { class: "col-lg-4 col-md-8 col-10 box-shadow-2 p-0" }, h("div", { class: "card border-grey border-lighten-3 m-0" }, h("ir-card-header", { class: "card-header border-0", "image-source": "../../../app-assets/images/logo/logo-dark.png", "image-alt-text": "branding logo", "header-title": "Login with Modern" }), h("div", { class: "card-content" }, h("div", { class: "card-body" }, h("form", { ref: el => (this.formRef = el), class: "form-horizontal form-simple", novalidate: true, onSubmit: this.handleFormSubmit.bind(this) }, h("ir-input", { ref: el => (this.usernameRef = el), type: "text", icon: "la la-user", placeholder: "Your Username", required: true, "container-style": "mb-0" }), h("ir-input", { ref: el => (this.passwordRef = el), type: "password", icon: "la la-key", placeholder: "Enter Password", required: true }), h("div", { class: "form-group row" }, h("div", { class: "col-sm-6 col-12 text-center text-sm-left" }, h("ir-checkbox", { ref: el => (this.checkboxRef = el), label: "Remember Me", "input-id": "remember-me", "checkbox-style": "chk-remember" })), h("div", { class: "col-sm-6 col-12 text-center text-sm-right" }, h("ir-link", { "link-title": "Forgot Password?", "link-destination": "#" }))), h("ir-button", { class: "btn-block", type: "submit", icon: "ft-unlock", "button-style": "btn-block", "button-title": " Login", "color-variant": "info" })))), h("div", { class: "card-footer" }, h("div", { class: "" }, h("p", { class: "float-xl-left text-center m-0" }, h("ir-link", { "link-title": " Recover password", "link-destination": "#" })), h("p", { class: "float-xl-right text-center m-0" }, "New to Moden Admin? ", h("ir-link", { onClick: this.toggleSidebar.bind(this), "link-title": "Sign Up", "link-destination": "#" })))), h("ir-sidebar", { ref: el => (this.sidebarRef = el), open: this.isSidebarOpened }, h("ir-register", null)))))))))));
  }
  static get is() { return "ir-login"; }
  static get states() {
    return {
      "username": {},
      "password": {},
      "isChecked": {},
      "isSidebarOpened": {}
    };
  }
  static get events() {
    return [{
        "method": "loginClicked",
        "name": "loginClicked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "ILogin",
          "resolved": "ILogin",
          "references": {
            "ILogin": {
              "location": "import",
              "path": "../../model/Login",
              "id": "src/model/Login.ts::ILogin"
            }
          }
        }
      }, {
        "method": "loginRegisterClicked",
        "name": "loginRegisterClicked",
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
      }];
  }
  static get listeners() {
    return [{
        "name": "irSidebarToggle",
        "method": "handleSidebarToggle",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "linkLoginClicked",
        "method": "handleLoginClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "registerClicked",
        "method": "handleRegisterClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=ir-login.js.map
