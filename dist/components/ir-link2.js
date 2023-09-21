import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irLinkCss = ":host{display:block}";

const IrLink = /*@__PURE__*/ proxyCustomElement(class IrLink extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.linkTitle = undefined;
    this.linkDestination = undefined;
  }
  render() {
    return (h(Host, null, h("a", { href: this.linkDestination, class: "card-link" }, this.linkTitle)));
  }
  static get style() { return irLinkCss; }
}, [0, "ir-link", {
    "linkTitle": [513, "link-title"],
    "linkDestination": [513, "link-destination"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-link"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrLink);
      }
      break;
  } });
}

export { IrLink as I, defineCustomElement as d };

//# sourceMappingURL=ir-link2.js.map