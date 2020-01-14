export class StateHelper {

  /**
   * Makes a shadow freeze
   * @param o object to freeze
   */
  public static deepFreeze<T>(o: T): T {
    Object.freeze(o);

    const oIsFunction = typeof o === 'function';
    const hasOwnProp = Object.prototype.hasOwnProperty;

    Object.getOwnPropertyNames(o).forEach((prop) => {
      if (
        hasOwnProp.call(o, prop) &&
        (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true)
        && o[prop] !== null
        && (typeof o[prop] === 'object' || typeof o[prop] === 'function')
        && !Object.isFrozen(o[prop])) {
        StateHelper.deepFreeze(o[prop]);
      }
    });

    return o;
  }

  /**
   * The method returns the clone of the object. Useful to clone frozen object.
   *
   * @param o object to clone
   */
  public static cloneObject<T>(o: T): T {
    let target;
    if (o) {
      if (typeof o === 'object') {

        if (Array.isArray(o)) {

          target = (o as any[]).slice();
          (o as any[]).forEach((element, index) => {
            (target as any[])[index] = StateHelper.cloneObject(element);
          });

        } else if (StateHelper.isValidDate(o)) {

          target = new Date(((o as any) as Date).toISOString());

        } else {

          target = Object.assign({}, o);
          Object.getOwnPropertyNames(o).forEach((prop) => {
              target[prop] = StateHelper.cloneObject(target[prop]);
            }
          );
        }

      } else if (typeof o === 'function') {

        target = o.bind({});
        Object.getOwnPropertyNames(o).forEach((prop) => {
            if (prop === 'caller' || prop === 'callee' || prop === 'arguments') {
              target[prop] = o[prop];
            } else if (prop !== 'length' && prop !== 'name') {
              target[prop] = StateHelper.cloneObject(target[prop]);
            }
          }
        );

      } else {
        target = o;
      }
    } else {
      target = o;
    }
    return target;
  }

  public static getEmptyObject(): any {
    return Object.create(null);
  }

  public static combine<S>(state: S, newValue: Partial<S>): S {
    return Object.assign(StateHelper.getEmptyObject(), state, newValue);
  }

  private static isValidDate(date) {
    return date && date instanceof Date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date as any);
  }
}

