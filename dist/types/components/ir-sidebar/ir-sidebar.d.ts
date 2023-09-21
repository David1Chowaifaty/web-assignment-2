import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrSidebar {
  name: string;
  side: 'right' | 'left';
  open: boolean;
  irSidebarToggle: EventEmitter;
  toggleSidebar(): Promise<void>;
  render(): any[];
}
