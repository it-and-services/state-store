export interface StateConfig {

  /**
   * Name of the store. the content can be found by the property window['ngx-state-store'][storeName]
   */
  storeName: string;

  /**
   * Logs the state of the store after every action.
   */
  log?: boolean;

  /**
   * Measures the time of action execution.
   */
  timekeeping?: boolean;

  /**
   * Initial state of the store.
   */
  initialState?: any;
}
