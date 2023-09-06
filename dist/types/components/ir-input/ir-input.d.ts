import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrInput {
  containerStyle: string;
  labelStyle: string;
  inputStyle: string;
  label: string;
  inputId: string;
  placeholder: string;
  value: string;
  type: string;
  ontextchange: EventEmitter<string>;
  visible: boolean;
  handleChange(event: any): void;
  render(): any;
}
