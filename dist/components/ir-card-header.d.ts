import type { Components, JSX } from "../types/components";

interface IrCardHeader extends Components.IrCardHeader, HTMLElement {}
export const IrCardHeader: {
  prototype: IrCardHeader;
  new (): IrCardHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
