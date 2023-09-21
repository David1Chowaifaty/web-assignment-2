import { Host, h } from "@stencil/core";
export class IrLink {
  constructor() {
    this.linkTitle = undefined;
    this.linkDestination = undefined;
  }
  render() {
    return (h(Host, null, h("a", { href: this.linkDestination, class: "card-link" }, this.linkTitle)));
  }
  static get is() { return "ir-link"; }
  static get originalStyleUrls() {
    return {
      "$": ["ir-link.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ir-link.css"]
    };
  }
  static get properties() {
    return {
      "linkTitle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "link-title",
        "reflect": true
      },
      "linkDestination": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "link-destination",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=ir-link.js.map
