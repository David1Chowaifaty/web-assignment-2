import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrInput {
  label: string;
  icon: string;
  inputId: string;
  placeholder: string;
  value: string;
  type: string;
  containerStyle: string;
  required: boolean;
  ontextchange: EventEmitter<string>;
  visible: boolean;
  handleChange(event: any): void;
  applyContainerStyle(): string;
  render(): any;
}
