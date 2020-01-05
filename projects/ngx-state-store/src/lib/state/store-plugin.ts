import { StateHelper } from './state-helper';

export abstract class StorePlugin {

  private namespace = 'ngx-state-store';

  get state() {
    return window[this.namespace][this.storageName].state;
  }

  protected constructor(private storageName: string) {
    this.prepareWindowObject(storageName);
  }

  abstract dispatchBefore(actionId: string, state: any, order: number);

  abstract dispatchAfter(actionId: string, state: any, order: number);

  abstract newState(state: any);

  /**
   *
   * @param appName e.g. tm
   */
  private prepareWindowObject(storeName: string): void {

    if (!window[this.namespace]) {
      window[this.namespace] = StateHelper.getEmptyObject();
    }

    if (!window[this.namespace][storeName]) {
      window[this.namespace][storeName] = StateHelper.getEmptyObject();
    }

    if (!window[this.namespace][storeName].state) {
      window[this.namespace][storeName].state = StateHelper.getEmptyObject();
    }
  }
}

