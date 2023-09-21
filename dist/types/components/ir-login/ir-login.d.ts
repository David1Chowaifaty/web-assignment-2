import { EventEmitter } from '../../stencil-public-runtime';
import { ILogin } from '../../model/Login';
import { IRegister } from '../../model/Register';
export declare class IrLogin {
  username: string;
  password: string;
  isChecked: boolean;
  isSidebarOpened: boolean;
  loginClicked: EventEmitter<ILogin>;
  loginRegisterClicked: EventEmitter<IRegister>;
  usernameRef: HTMLElement;
  passwordRef: HTMLElement;
  checkboxRef: HTMLElement;
  sidebarRef: HTMLElement;
  formRef: HTMLFormElement;
  componentDidLoad(): void;
  attachEventListeners(): void;
  handleSidebarToggle(): void;
  handleLoginClick(): void;
  handleRegisterClick(e: CustomEvent): void;
  updateUsername(e: CustomEvent): void;
  updatePassword(e: CustomEvent): void;
  updateCheckboxStatus(e: CustomEvent): void;
  toggleSidebar(): void;
  handleFormSubmit(e: Event): void;
  emitLoginData(): void;
  render(): any;
}
