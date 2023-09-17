/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { DataFormat, GroupedDataFormat } from "select2";
export { DataFormat, GroupedDataFormat } from "select2";
export namespace Components {
    interface IrCheckbox {
        "checkboxStyle": string;
        "checked": boolean;
        "containerStyle": string;
        "disabled": boolean;
        "inputId": string;
        "label": string;
        "labelStyle": string;
    }
    interface IrInput {
        "containerStyle": string;
        "inputId": string;
        "inputStyle": string;
        "label": string;
        "labelStyle": string;
        "placeholder": string;
        "type": string;
        "value": string;
    }
    interface IrSelect {
        "data": string | DataFormat[] | GroupedDataFormat[];
        "selectStyle": string;
        "selectedItem": string;
    }
    interface IrSwitch {
        "baseClass"?: string;
        "classOn"?: string;
        "colorOn"?: string;
        "disabled"?: boolean;
        "handleWidth"?: string | 'auto';
        "indeterminate"?: boolean;
        "inverse"?: boolean;
        "labelOff": string;
        "labelOn": string;
        "labelText"?: string;
        "labelWidth"?: string | 'auto';
        "offClass"?: string;
        "offColor"?: string;
        "radioAllOff"?: boolean;
        "readonly"?: boolean;
        "size"?: string | 'mini' | 'small' | 'normal' | 'large';
        "switch_animate"?: boolean;
        "value": boolean;
        "wrapperClass"?: string;
    }
}
export interface IrCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrCheckboxElement;
}
export interface IrInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrInputElement;
}
export interface IrSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrSelectElement;
}
export interface IrSwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrSwitchElement;
}
declare global {
    interface HTMLIrCheckboxElement extends Components.IrCheckbox, HTMLStencilElement {
    }
    var HTMLIrCheckboxElement: {
        prototype: HTMLIrCheckboxElement;
        new (): HTMLIrCheckboxElement;
    };
    interface HTMLIrInputElement extends Components.IrInput, HTMLStencilElement {
    }
    var HTMLIrInputElement: {
        prototype: HTMLIrInputElement;
        new (): HTMLIrInputElement;
    };
    interface HTMLIrSelectElement extends Components.IrSelect, HTMLStencilElement {
    }
    var HTMLIrSelectElement: {
        prototype: HTMLIrSelectElement;
        new (): HTMLIrSelectElement;
    };
    interface HTMLIrSwitchElement extends Components.IrSwitch, HTMLStencilElement {
    }
    var HTMLIrSwitchElement: {
        prototype: HTMLIrSwitchElement;
        new (): HTMLIrSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "ir-checkbox": HTMLIrCheckboxElement;
        "ir-input": HTMLIrInputElement;
        "ir-select": HTMLIrSelectElement;
        "ir-switch": HTMLIrSwitchElement;
    }
}
declare namespace LocalJSX {
    interface IrCheckbox {
        "checkboxStyle"?: string;
        "checked"?: boolean;
        "containerStyle"?: string;
        "disabled"?: boolean;
        "inputId"?: string;
        "label"?: string;
        "labelStyle"?: string;
        "onOncheckchange"?: (event: IrCheckboxCustomEvent<boolean>) => void;
    }
    interface IrInput {
        "containerStyle"?: string;
        "inputId"?: string;
        "inputStyle"?: string;
        "label"?: string;
        "labelStyle"?: string;
        "onOntextchange"?: (event: IrInputCustomEvent<string>) => void;
        "placeholder"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface IrSelect {
        "data"?: string | DataFormat[] | GroupedDataFormat[];
        "onOnselectchange"?: (event: IrSelectCustomEvent<string>) => void;
        "selectStyle"?: string;
        "selectedItem"?: string;
    }
    interface IrSwitch {
        "baseClass"?: string;
        "classOn"?: string;
        "colorOn"?: string;
        "disabled"?: boolean;
        "handleWidth"?: string | 'auto';
        "indeterminate"?: boolean;
        "inverse"?: boolean;
        "labelOff"?: string;
        "labelOn"?: string;
        "labelText"?: string;
        "labelWidth"?: string | 'auto';
        "offClass"?: string;
        "offColor"?: string;
        "onValueChange"?: (event: IrSwitchCustomEvent<boolean>) => void;
        "radioAllOff"?: boolean;
        "readonly"?: boolean;
        "size"?: string | 'mini' | 'small' | 'normal' | 'large';
        "switch_animate"?: boolean;
        "value"?: boolean;
        "wrapperClass"?: string;
    }
    interface IntrinsicElements {
        "ir-checkbox": IrCheckbox;
        "ir-input": IrInput;
        "ir-select": IrSelect;
        "ir-switch": IrSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ir-checkbox": LocalJSX.IrCheckbox & JSXBase.HTMLAttributes<HTMLIrCheckboxElement>;
            "ir-input": LocalJSX.IrInput & JSXBase.HTMLAttributes<HTMLIrInputElement>;
            "ir-select": LocalJSX.IrSelect & JSXBase.HTMLAttributes<HTMLIrSelectElement>;
            "ir-switch": LocalJSX.IrSwitch & JSXBase.HTMLAttributes<HTMLIrSwitchElement>;
        }
    }
}
