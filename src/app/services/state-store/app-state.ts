import { Inventory } from '../../models/inventory';

export interface AppState {
  ShowLoadingIndicator: string[];
  Counter: number;
  Inventories: Inventory[];
  // iso Date string
  LastDownloadAt: string;
}

