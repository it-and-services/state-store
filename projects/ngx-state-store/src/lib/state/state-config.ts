export interface StateConfig {
  appName: string;
  log?: boolean;

  /**
   * Measures the time of action execution.
   */
  timekeeping?: boolean;

  initialState?: any;
}
