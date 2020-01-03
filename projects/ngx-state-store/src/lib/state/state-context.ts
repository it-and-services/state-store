export interface StateContext<S> {

  /**
   * Get the current state.
   */
  getState(): S;

  /**
   * Reset the state to a new value.
   */
  setState(state: S);

  /**
   * Patch the existing state with the provided value.
   */
  patchState(val: Partial<S>);
}
