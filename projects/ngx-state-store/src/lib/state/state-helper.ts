export class StateHelper {

  // In progress. Helps check double refs.
  public static deepFreeze2<T>(object: T): T {

    if (object == null) {
      console.error('freeze null is not possible.');
      return object;
    }

    if (StateHelper.isObject(object) === false) {
      console.error('freeze not a object not possible. ' + object);
      return object;
    }

    // Retrieve the property names defined on object
    // Freeze properties before freezing self
    Object.getOwnPropertyNames(object).forEach((name) => {
      const value = object[name];

      if (value && StateHelper.isObject(value)) {
        object[name] = StateHelper.deepFreeze(value);
      }

    });

    if (Object.isFrozen(object)) {
      console.log('double ref: ' + object);
      return object;
    }
    return Object.freeze(object);
  }

  /**
   * Makes a shadow freeze
   * @param o object to freeze
   */
  public static deepFreeze(o) {
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

  public static isObject(o: any): boolean {
    return typeof o === 'object';
  }

  /**
   * Set a deeply nested value. Example:
   *
   *   setValue({ foo: { bar: { eat: false } } },
   *      'foo.bar.eat', true) //=> { foo: { bar: { eat: true } } }
   *
   * While it traverses it also creates new objects from top down.
   *
   * @ignore
   */
  public static setValue(obj: any, prop: string, val: any) {
    obj = {...obj};

    const split = prop.split('.');
    const last = split[split.length - 1];

    return split.reduce((acc, part) => {
      if (part === last) {
        acc[part] = val;
      } else {
        acc[part] = {...acc[part]};
      }

      return acc && acc[part];
    }, obj);
  }

  /**
   * Get a deeply nested value. Example:
   *
   * getValue({ foo: bar: [] }, 'foo.bar') //=> []
   *
   * @ignore
   */
  public static getValue(obj: any, prop: string) {
    return prop.split('.').reduce((acc: any, part: string) => acc && acc[part], obj);
  }

  public static getEmptyObject(): any {
    return Object.create(null);
  }

  public static combine<S>(state: S, newValue: Partial<S>): S {
    return Object.assign(StateHelper.getEmptyObject(), state, newValue);
  }
}

