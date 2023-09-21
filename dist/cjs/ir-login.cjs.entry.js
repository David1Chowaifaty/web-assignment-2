'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e7480c96.js');

const IrLogin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "app-content container center-layout mt-2" }, index.h("div", { class: "content-overlay" }), index.h("div", { class: "content-wrapper" }, index.h("div", { class: "content-body" }, index.h("section", { class: "row flexbox-container" }, index.h("div", { class: "col-12 d-flex align-items-center justify-content-center" }, index.h("div", { class: "col-lg-4 col-md-8 col-10 box-shadow-2 p-0" }, index.h("div", { class: "card border-grey border-lighten-3 m-0" }, index.h("div", { class: "card-header border-0" }, index.h("div", { class: "card-title text-center" }, index.h("img", { src: "../../../app-assets/images/logo/logo-dark.png", alt: "branding logo" })), index.h("h6", { class: "card-subtitle line-on-side text-muted text-center font-small-3 pt-2" }, index.h("span", null, "Login with Modern"))), index.h("div", { class: "card-content" }, index.h("div", { class: "card-body" }, index.h("form", { class: "form-horizontal form-simple", action: "index.html", novalidate: true }, index.h("fieldset", { class: "form-group position-relative has-icon-left mb-0" }, index.h("input", { type: "text", class: "form-control", id: "user-name", placeholder: "Your Username", required: true }), index.h("div", { class: "form-control-position" }, index.h("i", { class: "la la-user" }))), index.h("fieldset", { class: "form-group position-relative has-icon-left" }, index.h("input", { type: "password", class: "form-control", id: "user-password", placeholder: "Enter Password", required: true }), index.h("div", { class: "form-control-position" }, index.h("i", { class: "la la-key" }))), index.h("div", { class: "form-group row" }, index.h("div", { class: "col-sm-6 col-12 text-center text-sm-left" }, index.h("fieldset", null, index.h("input", { type: "checkbox", id: "remember-me", class: "chk-remember" }), index.h("label", { htmlFor: "remember-me" }, " Remember Me"))), index.h("div", { class: "col-sm-6 col-12 text-center text-sm-right" }, index.h("a", { href: "recover-password.html", class: "card-link" }, "Forgot Password?"))), index.h("button", { type: "submit", class: "btn btn-info btn-block" }, index.h("i", { class: "ft-unlock" }), " Login")))), index.h("div", { class: "card-footer" }, index.h("div", { class: "" }, index.h("p", { class: "float-xl-left text-center m-0" }, index.h("a", { href: "recover-password.html", class: "card-link" }, "Recover password")), index.h("p", { class: "float-xl-right text-center m-0" }, "New to Moden Admin?", ' ', index.h("a", { href: "register-simple.html", class: "card-link" }, "Sign Up"))))))))))));
  }
};

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map