import { StorePlugin } from './store-plugin';

/**
 * Measure time of action execution.
 */
interface PerformanceSettings {
  // Measure action duration
  timekeeping: boolean;
  // After reaching the limit it starts from the beginning
  limit: number;
  performanceLog: ActionTime[];
}

interface ActionTime {
  id: string;
  order: number;
  time: number;
}

export class StorePerformancePlugin extends StorePlugin {

  private readonly settings: PerformanceSettings;
  private performanceLog: ActionTime[] = [];

  private get timekeeping(): boolean {
    return this.state.performance.timekeeping;
  }

  constructor(storeName: string, log: boolean = false, limit = 1000) {
    super(storeName);
    this.settings = {
      timekeeping: log,
      limit: limit < 1 ? 1 : limit,
      performanceLog: this.performanceLog
    };
    this.state.performance = this.settings;
  }

  dispatchBefore(actionId: string, state: any, order: number): void {
    if (!this.timekeeping) {
      return;
    }
    const index = order % this.settings.limit;
    if (this.performanceLog.length < index) {
      this.performanceLog.length = index;
    }
    this.performanceLog[index] = {
      id: actionId,
      order,
      time: performance.now()
    };
  }

  newState(): void {
  }

  dispatchAfter(actionId: string, state: any, order: number): void {
    if (!this.timekeeping) {
      return;
    }
    const index = order % this.settings.limit;
    if (this.performanceLog[index]?.order === order) {
      this.performanceLog[index].time = performance.now() - this.performanceLog[index].time;
    }
  }
}
