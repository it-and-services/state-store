export class StateHelper {

  /**
   * Makes a shadow freeze
   * @param o object to freeze
   */
  public static deepFreeze(o): any {
    Object.freeze(o);

    const oIsFunction = typeof o === 'function';
    const hasOwnProp = Object.prototype.hasOwnProperty;

    Object.getOwnPropertyNames(o).forEach((prop) => {
      if (
        hasOwnProp.call(o, prop) &&
        (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true) &&
        o[prop] !== null &&
        (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
        !Object.isFrozen(o[prop])
      ) {
        StateHelper.deepFreeze(o[prop]);
      }
    });

    return o;
  }

  /**
   * The method unfreeze the object
   *
   * @param o object to unfreeze
   */
  public static unfreeze(o): any {
    let target;
    if (o) {
      if (typeof o === 'object') {
        if (Array.isArray(o)) {
          (o as any[]).forEach((prop, index) => {
            (o as any[])[index] = StateHelper.unfreeze(prop);
          });
        } else {
          target = Object.assign({}, o);
          Object.getOwnPropertyNames(target).forEach((prop) => {
              target[prop] = StateHelper.unfreeze(target[prop]);
            }
          );
        }
      } else {
        target = o;
      }
    } else {
      target = o;
    }
    return target;
  }

  private static limitedAssign<S, T>(source: S, target: T): void {
    if (source && target) {
      Object.getOwnPropertyNames(target).forEach((prop) => {
          if (source[prop] && Object.prototype.hasOwnProperty.call(target, prop)) {
            if (typeof source[prop] === 'object' && !Array.isArray(source[prop])) {
              StateHelper.limitedAssign(source[prop], target[prop]);
            } else {
              target[prop] = source[prop];
            }
          }
        }
      );
    }
  }

  public static getEmptyObject(): any {
    return Object.create(null);
  }

  public static combine<S>(state: S, newValue: Partial<S>): S {
    return Object.assign(StateHelper.getEmptyObject(), state, newValue);
  }
}

