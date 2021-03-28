import { StorePlugin } from './store-plugin';
import { StateHelper } from './state-helper';

interface ActionToState {
  actionId: string;
  state: any;
}

interface LogSettings {
  // Saves all executed actions
  executedStack: ActionToState[];
  // After reaching the limit first element will be removed, if limit is -1 then no elements will be removed
  limit: number;
  // logging is done if set to true
  log: boolean;
}

export class StoreLogPlugin extends StorePlugin {

  private readonly actionEnd = 'Action end:   ';
  private readonly stateLog: LogSettings;

  private get loggingDisabled(): boolean {
    return !this.state.log.log;
  }

  constructor(storeName: string, log: boolean = false, limit = 0) {
    super(storeName);
    this.stateLog = StateHelper.getEmptyObject();
    this.stateLog.executedStack = [];
    this.stateLog.limit = limit;
    this.stateLog.log = log;
    this.state.log = this.stateLog;
  }

  private static logAction(message, state?): void {
    console.log(message, state);
  }

  private static restrict(arr: ActionToState[], limit: number): void {
    if (arr.length > limit) {
      arr.splice(0, 1);
    }
  }

  dispatchBefore(): void {
  }

  dispatchAfter(actionId: string, state: any, order: number): void {
    if (this.loggingDisabled) {
      return;
    }
    const log = {
      actionId,
      state
    };
    this.stateLog.executedStack.push(log);
    StoreLogPlugin.restrict(this.stateLog.executedStack, this.stateLog.limit);
    const message = this.actionEnd + actionId;
    StoreLogPlugin.logAction(order + '. ' + message, state);
    StoreLogPlugin.logAction('', '');
  }

  newState(): void {
  }
}
