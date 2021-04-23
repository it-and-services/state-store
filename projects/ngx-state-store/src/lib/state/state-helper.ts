export class StateHelper {

  private static immutableMapFunction = StateHelper.immutableFunction('Map');
  private static immutableSetFunction = StateHelper.immutableFunction('Set');
  private static immutableDateFunction = StateHelper.immutableFunction('Date');

  private static immutableFunction(objectName: string) {
    return (...a: any) => {
      throw Error(objectName + ' is immutable');
    };
  }

  /**
   * Makes a shadow freeze
   *
   * @param o object to freeze
   */
  public static deepFreeze<T>(o: T): T {

    // @ts-ignore
    if (o === window) {
      return o;
    }

    if (o instanceof Map) {
      StateHelper.freezeMap(o);
    } else if (o instanceof Set) {
      StateHelper.freezeSet(o);
    } else if (o instanceof Date && StateHelper.isValidDate(o)) {
      StateHelper.freezeDate(o);
    }

    StateHelper.freezeObject(o);
    return o;
  }

  private static freezeMap(o: Map<any, any>): void {
    o.clear = StateHelper.immutableMapFunction;
    o.set = StateHelper.immutableMapFunction;
    o.delete = StateHelper.immutableMapFunction;

    const origin = new Map(o);
    for (const [key, value] of origin.entries()) {
      StateHelper.deepFreeze(key);
      StateHelper.deepFreeze(value);
    }
    o.entries = () => origin.entries();
    o.values = () => origin.values();
    o.keys = () => origin.keys();
    o.has = (a: any) => origin.has(a);
    o.get = (a: any) => origin.get(a);
    o.forEach = (callbackFn) => origin.forEach(callbackFn);
    o[Symbol.iterator] = () => origin[Symbol.iterator]();
    Object.defineProperty(o, 'size', {
      value: origin.size,
      writable: false
    });
  }

  private static freezeSet(o: Set<any>): void {
    o.clear = StateHelper.immutableSetFunction;
    o.add = StateHelper.immutableSetFunction;
    o.delete = StateHelper.immutableSetFunction;

    const origin = new Set(o);
    for (const value of origin) {
      StateHelper.deepFreeze(value);
    }
    o.entries = () => origin.entries();
    o.values = () => origin.values();
    o.keys = () => origin.keys();
    o.has = (a: any) => origin.has(a);
    o.forEach = (callbackFn) => origin.forEach(callbackFn);
    o[Symbol.iterator] = () => origin[Symbol.iterator]();
    Object.defineProperty(o, 'size', {
      value: origin.size,
      writable: false
    });
  }

  private static freezeDate(o: Date): void {
    o.setDate = StateHelper.immutableDateFunction;
    o.setHours = StateHelper.immutableDateFunction;
    o.setFullYear = StateHelper.immutableDateFunction;
    o.setMilliseconds = StateHelper.immutableDateFunction;
    o.setMinutes = StateHelper.immutableDateFunction;
    o.setMonth = StateHelper.immutableDateFunction;
    o.setSeconds = StateHelper.immutableDateFunction;
    o.setTime = StateHelper.immutableDateFunction;
    o.setUTCDate = StateHelper.immutableDateFunction;
    o.setUTCHours = StateHelper.immutableDateFunction;
    o.setUTCFullYear = StateHelper.immutableDateFunction;
    o.setUTCMilliseconds = StateHelper.immutableDateFunction;
    o.setUTCMinutes = StateHelper.immutableDateFunction;
    o.setUTCMonth = StateHelper.immutableDateFunction;
    o.setUTCSeconds = StateHelper.immutableDateFunction;

    const origin = new Date(o.getTime());
    o.getDate = () => origin.getDate();
    o.getDay = () => origin.getDay();
    o.getFullYear = () => origin.getFullYear();
    o.getHours = () => origin.getHours();
    o.getMilliseconds = () => origin.getMilliseconds();
    o.getMinutes = () => origin.getMinutes();
    o.getMonth = () => origin.getMonth();
    o.getSeconds = () => origin.getSeconds();
    o.getTimezoneOffset = () => origin.getTimezoneOffset();
    o.getTime = () => origin.getTime();
    o.getUTCDate = () => origin.getUTCDate();
    o.getUTCDay = () => origin.getUTCDay();
    o.getUTCFullYear = () => origin.getUTCFullYear();
    o.getUTCHours = () => origin.getUTCHours();
    o.getUTCMilliseconds = () => origin.getUTCMilliseconds();
    o.getUTCMinutes = () => origin.getUTCMinutes();
    o.getUTCMonth = () => origin.getUTCMonth();
    o.getUTCSeconds = () => origin.getUTCSeconds();

    o.valueOf = () => origin.valueOf();
    o.toDateString = () => origin.toDateString();
    o.toString = () => origin.toString();
    o.toJSON = (key?: any) => origin.toJSON(key);
    o.toLocaleDateString = () => origin.toLocaleDateString();
    o.toLocaleString = () => origin.toLocaleString();
    o.toLocaleTimeString = () => origin.toLocaleTimeString();
    o.toISOString = () => origin.toISOString();
    o.toTimeString = () => origin.toTimeString();
    o.toUTCString = () => origin.toUTCString();
  }

  private static freezeObject(o: any): void {
    Object.freeze(o);
    const oIsFunction = typeof o === 'function';
    Object.getOwnPropertyNames(o).forEach((prop) => {
      if (
        (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true)
        && o[prop] !== null
        && (typeof o[prop] === 'object' || typeof o[prop] === 'function')
        && !Object.isFrozen(o[prop])) {
        StateHelper.deepFreeze(o[prop]);
      }
    });
  }

  /**
   * The method returns the clone of the object. Useful to clone frozen object.
   *
   * @param o object to clone
   * @param cloneFunctions determines whether the functions must be also cloned, default value 'true'
   */
  public static cloneObject<T>(o: T, cloneFunctions = true): T {
    const cyclicDependenciesMap = new Map<any, any>();
    return StateHelper.cloneObjectIntern(cyclicDependenciesMap, o, undefined, cloneFunctions);
  }

  /**
   * The method returns the clone of the object. Useful to clone frozen object.
   *
   * @param cyclicDependenciesMap map to detect and resolve cyclic dependencies
   * @param o object to clone
   * @param parent owner object of the object to clone, it is used for the functions cloning
   * @param cloneFunctions determines whether the functions must be also cloned, default value 'true'
   */
  private static cloneObjectIntern<T>(cyclicDependenciesMap: Map<any, any>, o: T, parent?, cloneFunctions?): T {
    let target;

    // @ts-ignore
    if (o === window) {
      return o;
    }

    if (o) {

      if (cyclicDependenciesMap.has(o)) {
        return cyclicDependenciesMap.get(o);
      }

      if (typeof o === 'object') {

        // clone Array
        if (Array.isArray(o)) {
          target = StateHelper.cloneArray(o as any[], cyclicDependenciesMap, cloneFunctions);
          // clone Map
        } else if (o instanceof Map) {
          target = StateHelper.cloneMap(o as Map<any, any>, cyclicDependenciesMap, cloneFunctions);
          // clone Set
        } else if (o instanceof Set) {
          target = StateHelper.cloneSet(o as Set<any>, cyclicDependenciesMap, cloneFunctions);
          // clone Date
        } else if (StateHelper.isValidDate(o)) {
          target = new Date(((o as any) as Date).getTime());
          cyclicDependenciesMap.set(o, target);
          // clone Object
        } else {
          target = StateHelper.cloneSimpleObject(o, cyclicDependenciesMap, cloneFunctions);
        }
        // clone function
      } else if (typeof o === 'function') {
        if (cloneFunctions) {
          target = StateHelper.cloneFunction(o as any, cyclicDependenciesMap, parent, cloneFunctions);
        }
      } else {
        target = o;
      }
    } else {
      target = o;
    }
    return target;
  }

  private static cloneArray(o: any[], cyclicDependenciesMap: Map<any, any>, cloneFunctions): any[] {
    const target = o.slice();
    cyclicDependenciesMap.set(o, target);
    (o as any[]).forEach((element, index) => {
      (target as any[])[index] = StateHelper.cloneObjectIntern(cyclicDependenciesMap, element, undefined, cloneFunctions);
    });
    return target;
  }

  private static cloneMap(o: Map<any, any>, cyclicDependenciesMap: Map<any, any>, cloneFunctions): Map<any, any> {
    const target = new Map();
    cyclicDependenciesMap.set(o, target);
    for (const [key, value] of o.entries()) {
      const keyClone = StateHelper.cloneObjectIntern(cyclicDependenciesMap, key, undefined, cloneFunctions);
      const valueClone = StateHelper.cloneObjectIntern(cyclicDependenciesMap, value, undefined, cloneFunctions);
      target.set(keyClone, valueClone);
    }
    return target;
  }

  private static cloneSet(o: Set<any>, cyclicDependenciesMap: Map<any, any>, cloneFunctions): Set<any> {
    const target = new Set();
    cyclicDependenciesMap.set(o, target);
    for (const value of o) {
      const valueClone = StateHelper.cloneObjectIntern(cyclicDependenciesMap, value, undefined, cloneFunctions);
      target.add(valueClone);
    }
    return target;
  }

  private static cloneSimpleObject(o: any, cyclicDependenciesMap: Map<any, any>, cloneFunctions): any {
    const target = Object.assign({}, o);
    cyclicDependenciesMap.set(o, target);

    Object.getOwnPropertyNames(o).forEach((prop) => {
        const functionType = (typeof o[prop] === 'function');
        if (cloneFunctions && functionType || !functionType) {
          target[prop] = StateHelper.cloneObjectIntern(cyclicDependenciesMap, o[prop], target, cloneFunctions);
        } else {
          delete target[prop];
        }
      }
    );
    return target;
  }

  private static cloneFunction(o: any, cyclicDependenciesMap: Map<any, any>, parent, cloneFunctions): any {
    const target = o.bind(parent || {});
    cyclicDependenciesMap.set(o, target);

    Object.getOwnPropertyNames(o).forEach((prop) => {
        if (prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' && prop !== 'length' && prop !== 'name') {
          target[prop] = StateHelper.cloneObjectIntern(cyclicDependenciesMap, o[prop], target, cloneFunctions);
        }
      }
    );
    return target;
  }

  public static getEmptyObject(): any {
    return Object.create(null);
  }

  public static combine<S>(state: S, newValue: Partial<S>): S {
    return Object.assign(StateHelper.getEmptyObject(), state, newValue);
  }

  private static isValidDate(date): boolean {
    return date && date instanceof Date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date as any);
  }
}

