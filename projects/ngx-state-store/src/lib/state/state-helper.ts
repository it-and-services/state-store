export class StateHelper {

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

        if (Array.isArray(o)) {

          target = (o as any[]).slice();
          cyclicDependenciesMap.set(o, target);
          (o as any[]).forEach((element, index) => {
            (target as any[])[index] = StateHelper.cloneObjectIntern(cyclicDependenciesMap, element, o, cloneFunctions);
          });

        } else if (StateHelper.isValidDate(o)) {

          target = new Date(((o as any) as Date).toISOString());
          cyclicDependenciesMap.set(o, target);

        } else {

          target = Object.assign({}, o);
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
        }

      } else if (typeof o === 'function') {

        if (cloneFunctions) {
          target = o.bind(parent || {});
          cyclicDependenciesMap.set(o, target);

          Object.getOwnPropertyNames(o).forEach((prop) => {
              if (prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' && prop !== 'length' && prop !== 'name') {
                target[prop] = StateHelper.cloneObjectIntern(cyclicDependenciesMap, o[prop], target, cloneFunctions);
              }
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

