import { StorePlugin } from './store-plugin';

/**
 * Measure time of action execution.
 */
interface PerformanceSettings {

  // Measure action duration
  timekeeping: boolean;

  performanceLog: ActionTime[];
}

interface ActionTime {
  id: string;
  time: number;
}

export class StatePerformancePlugin extends StorePlugin {

  private settings: PerformanceSettings;
  private performanceLog: ActionTime[] = [];

  private get timekeeping(): boolean {
    return this.state.performance.timekeeping;
  }

  constructor(appName: string, log: boolean = false) {

    super(appName);

    this.settings = {
      timekeeping: log,
      performanceLog: this.performanceLog
    };

    this.state.performance = this.settings;

  }

  dispatchBefore(actionId: string, state: any, order: number) {

    if (!this.timekeeping) {
      return;
    }

    this.performanceLog[order] = {
      id: actionId,
      time: performance.now()
    };
  }

  newState() {
  }

  dispatchAfter(actionId: string, state: any, order: number) {

    if (!this.timekeeping) {
      return;
    }

    this.performanceLog[order].time = performance.now() - this.performanceLog[order].time;

  }
}
