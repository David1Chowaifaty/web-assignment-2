import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irCardHeaderCss = ":host{display:block}";

const IrCardHeader = /*@__PURE__*/ proxyCustomElement(class IrCardHeader extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.imageSource = undefined;
    this.imageAltText = undefined;
    this.headerTitle = undefined;
  }
  render() {
    return (h(Host, null, h("div", { class: "card-title text-center" }, h("img", { src: this.imageSource, alt: this.imageAltText })), h("h6", { class: "card-subtitle line-on-side text-muted text-center font-small-3 pt-2" }, h("span", null, this.headerTitle))));
  }
  static get style() { return irCardHeaderCss; }
}, [0, "ir-card-header", {
    "imageSource": [513, "image-source"],
    "imageAltText": [513, "image-alt-text"],
    "headerTitle": [513, "header-title"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-card-header"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-card-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrCardHeader);
      }
      break;
  } });
}

export { IrCardHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-card-header2.js.map