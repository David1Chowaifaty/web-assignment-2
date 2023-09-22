import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-443d43b8.js';

const IrButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonClicked = createEvent(this, "buttonClicked", 7);
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
    return (h("button", { type: this.type, onClick: this.handleClick.bind(this), class: `btn ${this.applyButtonStyle()} ${this.buttonStyle} ${shadow} ${this.glow ? 'btn-glow' : ''} ` }, this.icon !== '' && (h(Fragment, null, h("i", { class: this.icon }), "\u00A0")), this.buttonTitle));
  }
  static get watchers() { return {
    "shapeVariant": ["shapeChanged"],
    "colorVariant": ["colorChanged"]
  }; }
};

const irCardHeaderCss = ":host{display:block}";

const IrCardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imageSource = undefined;
    this.imageAltText = undefined;
    this.headerTitle = undefined;
  }
  render() {
    return (h(Host, null, h("div", { class: "card-title text-center" }, h("img", { src: this.imageSource, alt: this.imageAltText })), h("h6", { class: "card-subtitle line-on-side text-muted text-center font-small-3 pt-2" }, h("span", null, this.headerTitle))));
  }
};
IrCardHeader.style = irCardHeaderCss;

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
  componentDidLoad() {
    $(this.checkboxRef).iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
    });
    $(this.checkboxRef).on('ifChanged', (event) => {
      this.handleChange(event);
    });
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
    return (h(Host, null, h("input", { ref: el => (this.checkboxRef = el), type: "checkbox", disabled: this.disabled, onChange: this.handleChange.bind(this), checked: this.checked, class: this.checkboxStyle, id: this.inputId }), this.labelShown && (h("label", { class: this.labelStyle, htmlFor: this.inputId }, this.label))));
  }
  static get watchers() { return {
    "label": ["onLabelChange"]
  }; }
};
IrCheckbox.style = irCheckboxCss;

const irInputCss = ":host{display:block}";

const IrInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ontextchange = createEvent(this, "ontextchange", 7);
    this.label = '';
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
    return (h(Host, null, h("fieldset", { class: this.applyContainerStyle() }, this.label && (h("div", { class: "input-group-prepend" }, h("span", { class: "input-group-text", id: this.inputId }, this.label))), h("input", { type: this.type, placeholder: this.placeholder, class: "form-control", value: this.value, onInput: event => this.handleChange(event), "aria-label": "Small", "aria-describedby": "inputGroup-sizing-sm", required: this.required }), this.icon && (h("div", { class: "form-control-position" }, h("i", { class: this.icon }, " "))))));
  }
};
IrInput.style = irInputCss;

const irLinkCss = ":host{display:block}";

const IrLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.linkTitle = undefined;
    this.linkDestination = undefined;
  }
  render() {
    return (h(Host, null, h("a", { href: this.linkDestination, class: "card-link" }, this.linkTitle)));
  }
};
IrLink.style = irLinkCss;

const IrLogin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};

const IrRegister = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.registerClicked = createEvent(this, "registerClicked", 7);
    this.linkLoginClicked = createEvent(this, "linkLoginClicked", 7);
    this.imagePath = undefined;
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
    return (h("section", { class: "card" }, h("ir-card-header", { class: "card-header border-0", "image-source": this.imagePath, "image-alt-text": "branding logo", "header-title": "Create Account" }), h("div", { class: "card-content" }, h("div", { class: "card-body" }, h("form", { ref: el => (this.formRef = el), class: "form-horizontal form-simple", novalidate: true, onSubmit: this.handleFormSubmit.bind(this) }, h("ir-input", { ref: el => (this.usernameRef = el), type: "text", icon: "la la-user", placeholder: "User Name", "container-style": "mb-1" }), h("ir-input", { ref: el => (this.emailRef = el), type: "text", icon: "la la-envelope", placeholder: "Your Email Address", required: true, "container-style": "mb-1" }), h("ir-input", { ref: el => (this.passwordRef = el), type: "password", icon: "la la-key", placeholder: "Enter Password", required: true }), h("ir-button", { class: "btn-block", type: "submit", icon: "ft-unlock", "button-style": "btn-block", "button-title": " Register", "color-variant": "info" }))), h("p", { class: "text-center" }, "Already have an account ? ", h("ir-link", { onClick: this.handleClick.bind(this), "link-title": "Log in", "link-destination": "#" })))));
  }
};

const irSidebarCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding:0.5rem}.sidebar-right.active{right:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding:0.5rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";

const IrSidebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.irSidebarToggle = createEvent(this, "irSidebarToggle", 7);
    this.name = undefined;
    this.side = 'right';
    this.open = false;
  }
  async toggleSidebar() {
    this.irSidebarToggle.emit(this.open);
  }
  render() {
    let className = '';
    if (this.open) {
      className = 'active';
    }
    else {
      className = '';
    }
    return [
      h("div", { class: `backdrop ${className}`, onClick: () => {
          this.toggleSidebar();
        } }),
      h("div", { class: `sidebar-${this.side} ${className}` }, h("a", { class: "close", onClick: () => {
          this.toggleSidebar();
        } }, h("ir-icon", { icon: "ft-x" })), h("slot", null)),
    ];
  }
};
IrSidebar.style = irSidebarCss;

export { IrButton as ir_button, IrCardHeader as ir_card_header, IrCheckbox as ir_checkbox, IrInput as ir_input, IrLink as ir_link, IrLogin as ir_login, IrRegister as ir_register, IrSidebar as ir_sidebar };

//# sourceMappingURL=ir-button_8.entry.js.map