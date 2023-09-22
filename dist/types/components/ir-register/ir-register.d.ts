import { EventEmitter } from '../../stencil-public-runtime';
import { IRegister } from '../../model/Register';
export declare class IrRegister {
  imagePath: string;
  username: string;
  password: string;
  email: string;
  registerClicked: EventEmitter<IRegister>;
  linkLoginClicked: EventEmitter<any>;
  usernameRef: HTMLElement;
  passwordRef: HTMLElement;
  emailRef: HTMLElement;
  formRef: HTMLFormElement;
  componentDidLoad(): void;
  handleClick(): void;
  addEventListeners(): void;
  handleUsernameChange(e: CustomEvent): void;
  handlePasswordChange(e: CustomEvent): void;
  handleEmailChange(e: CustomEvent): void;
  handleFormSubmit(e: Event): void;
  emitRegisterData(): void;
  render(): any;
}
