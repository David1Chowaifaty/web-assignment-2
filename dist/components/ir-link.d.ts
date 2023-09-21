import type { Components, JSX } from "../types/components";

interface IrLink extends Components.IrLink, HTMLElement {}
export const IrLink: {
  prototype: IrLink;
  new (): IrLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
