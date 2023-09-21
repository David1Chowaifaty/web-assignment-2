import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-card-header2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-link2.js';

const IrRegister = /*@__PURE__*/ proxyCustomElement(class IrRegister extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.registerClicked = createEvent(this, "registerClicked", 7);
    this.linkLoginClicked = createEvent(this, "linkLoginClicked", 7);
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
}, [0, "ir-register", {
    "username": [32],
    "password": [32],
    "email": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-register", "ir-button", "ir-card-header", "ir-input", "ir-link"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-register":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrRegister);
      }
      break;
    case "ir-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ir-card-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ir-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ir-link":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { IrRegister as I, defineCustomElement as d };

//# sourceMappingURL=ir-register2.js.map