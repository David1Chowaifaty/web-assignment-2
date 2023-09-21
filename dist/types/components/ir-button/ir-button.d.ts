import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrButton {
  type: 'button' | 'submit' | 'reset';
  buttonTitle: string;
  icon: string;
  buttonStyle: string;
  colorVariant: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  shadow: '' | '1' | '2' | '3' | '4' | '5';
  glow: boolean;
  shapeVariant: 'default' | 'round' | 'square' | 'outline';
  buttonClicked: EventEmitter<any>;
  shapeChanged(): void;
  colorChanged(): void;
  private applyButtonStyle;
  handleClick(): void;
  render(): any;
}
