import { EventEmitter } from '../../stencil-public-runtime';
import { DataFormat, GroupedDataFormat } from 'select2';
export declare class IrSelect {
  data: string | DataFormat[] | GroupedDataFormat[];
  selectedItem: string;
  selectStyle: string;
  selectData: DataFormat[] | GroupedDataFormat[];
  onselectchange: EventEmitter<string>;
  private selectId;
  private testElement;
  componentWillLoad(): void;
  componentDidLoad(): void;
  handleDataChange(newValue: string): void;
  private parseData;
  private initializeSelect2;
  private handleSelect;
  render(): any;
}
