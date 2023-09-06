import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrSelect {
  data: string;
  selectedItem: string;
  selectData: SelectTypes[];
  onselectchange: EventEmitter<string>;
  el: HTMLElement;
  selectRef: HTMLSelectElement;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  handleDataChange(newValue: string): void;
  private parseData;
  private moveAttributesToSelectElement;
  private initializeSelect2;
  private destroySelect2;
  onSelectChange(e: Event): void;
  render(): any;
}
