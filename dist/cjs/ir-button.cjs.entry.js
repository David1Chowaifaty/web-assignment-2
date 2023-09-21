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

exports.ir_button = IrButton;

//# sourceMappingURL=ir-button.cjs.entry.js.map