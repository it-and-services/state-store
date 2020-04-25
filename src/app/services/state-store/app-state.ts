import { Inventory } from '../../models/inventory';

export class AppState {
  ShowLoadingIndicator: string[];
  Counter: number;
  Inventories: Inventory[];
  // iso Date string
  LastDownloadAt: string;
}

