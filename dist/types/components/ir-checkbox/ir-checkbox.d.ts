import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrCheckbox {
  label: string;
  inputId: string;
  checkboxStyle: string;
  disabled: boolean;
  labelStyle: string;
  containerStyle: string;
  checked: boolean;
  oncheckchange: EventEmitter<boolean>;
  labelShown: boolean;
  checkboxRef: HTMLElement;
  componentWillLoad(): void;
  componentDidLoad(): void;
  onLabelChange(): void;
  setLabelShown(): void;
  handleChange(event: Event): void;
  render(): any;
}
