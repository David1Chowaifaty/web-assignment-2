export declare class IrInput {
  placeholder: string;
  value: string;
  type: string;
  currentValue: string;
  inputStyle: string;
  componentWillLoad(): void;
  handleChange(event: Event): void;
  render(): any;
}
