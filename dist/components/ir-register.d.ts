import type { Components, JSX } from "../types/components";

interface IrRegister extends Components.IrRegister, HTMLElement {}
export const IrRegister: {
  prototype: IrRegister;
  new (): IrRegister;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
