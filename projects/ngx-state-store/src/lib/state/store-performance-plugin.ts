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

export class StorePerformancePlugin extends StorePlugin {

  private readonly settings: PerformanceSettings;
  private performanceLog: ActionTime[] = [];

  private get timekeeping(): boolean {
    return this.state.performance.timekeeping;
  }

  constructor(storeName: string, log: boolean = false) {
    super(storeName);
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