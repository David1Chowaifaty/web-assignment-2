import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-card-header2.js';
import { d as defineCustomElement$6 } from './ir-checkbox2.js';
import { d as defineCustomElement$5 } from './ir-input2.js';
import { d as defineCustomElement$4 } from './ir-link2.js';
import { d as defineCustomElement$3 } from './ir-register2.js';
import { d as defineCustomElement$2 } from './ir-sidebar2.js';

const IrLogin$1 = /*@__PURE__*/ proxyCustomElement(class IrLogin extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.loginClicked = createEvent(this, "loginClicked", 7);
    this.loginRegisterClicked = createEvent(this, "loginRegisterClicked", 7);
    this.imagePath = undefined;
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
    return (h(Host, null, h("div", { class: "app-content container center-layout mt-2" }, h("div", { class: "content-overlay" }), h("div", { class: "content-wrapper" }, h("div", { class: "content-body" }, h("section", { class: "row flexbox-container" }, h("div", { class: "col-12 d-flex align-items-center justify-content-center" }, h("div", { class: "col-lg-4 col-md-8 col-10 box-shadow-2 p-0" }, h("div", { class: "card border-grey border-lighten-3 m-0" }, h("ir-card-header", { class: "card-header border-0", "image-source": this.imagePath, "image-alt-text": "branding logo", "header-title": "Login with Modern" }), h("div", { class: "card-content" }, h("div", { class: "card-body" }, h("form", { ref: el => (this.formRef = el), class: "form-horizontal form-simple", novalidate: true, onSubmit: this.handleFormSubmit.bind(this) }, h("ir-input", { ref: el => (this.usernameRef = el), type: "text", icon: "la la-user", placeholder: "Your Username", required: true, "container-style": "mb-0" }), h("ir-input", { ref: el => (this.passwordRef = el), type: "password", icon: "la la-key", placeholder: "Enter Password", required: true }), h("div", { class: "form-group row" }, h("div", { class: "col-sm-6 col-12 text-center text-sm-left" }, h("ir-checkbox", { ref: el => (this.checkboxRef = el), label: "Remember Me", "input-id": "remember-me", "checkbox-style": "chk-remember" })), h("div", { class: "col-sm-6 col-12 text-center text-sm-right" }, h("ir-link", { "link-title": "Forgot Password?", "link-destination": "#" }))), h("ir-button", { class: "btn-block", type: "submit", icon: "ft-unlock", "button-style": "btn-block", "button-title": " Login", "color-variant": "info" })))), h("div", { class: "card-footer" }, h("div", { class: "" }, h("p", { class: "float-xl-left text-center m-0" }, h("ir-link", { "link-title": " Recover password", "link-destination": "#" })), h("p", { class: "float-xl-right text-center m-0" }, "New to Moden Admin? ", h("ir-link", { onClick: this.toggleSidebar.bind(this), "link-title": "Sign Up", "link-destination": "#" })))), h("ir-sidebar", { ref: el => (this.sidebarRef = el), open: this.isSidebarOpened }, h("ir-register", { "image-path": this.imagePath })))))))))));
  }
}, [0, "ir-login", {
    "imagePath": [513, "image-path"],
    "username": [32],
    "password": [32],
    "isChecked": [32],
    "isSidebarOpened": [32]
  }, [[0, "irSidebarToggle", "handleSidebarToggle"], [0, "linkLoginClicked", "handleLoginClick"], [0, "registerClicked", "handleRegisterClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-login", "ir-button", "ir-card-header", "ir-checkbox", "ir-input", "ir-link", "ir-register", "ir-sidebar"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-login":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrLogin$1);
      }
      break;
    case "ir-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ir-card-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ir-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ir-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ir-link":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ir-register":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ir-sidebar":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IrLogin = IrLogin$1;
const defineCustomElement = defineCustomElement$1;

export { IrLogin, defineCustomElement };

//# sourceMappingURL=ir-login.js.map