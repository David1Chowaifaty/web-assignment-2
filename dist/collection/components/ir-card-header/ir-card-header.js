import { Host, h } from "@stencil/core";
export class IrCardHeader {
  constructor() {
    this.imageSource = undefined;
    this.imageAltText = undefined;
    this.headerTitle = undefined;
  }
  render() {
    return (h(Host, null, h("div", { class: "card-title text-center" }, h("img", { src: this.imageSource, alt: this.imageAltText })), h("h6", { class: "card-subtitle line-on-side text-muted text-center font-small-3 pt-2" }, h("span", null, this.headerTitle))));
  }
  static get is() { return "ir-card-header"; }
  static get originalStyleUrls() {
    return {
      "$": ["ir-card-header.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ir-card-header.css"]
    };
  }
  static get properties() {
    return {
      "imageSource": {
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
        "attribute": "image-source",
        "reflect": true
      },
      "imageAltText": {
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
        "attribute": "image-alt-text",
        "reflect": true
      },
      "headerTitle": {
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
        "attribute": "header-title",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=ir-card-header.js.map
