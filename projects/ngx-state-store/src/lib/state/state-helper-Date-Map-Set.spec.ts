import { inject, TestBed } from '@angular/core/testing';
import { StateHelper } from './state-helper';

describe('StateHelper - Date, Map, Set tests;', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });

  it('Date should be unfrozen and cloned', inject([], () => {

    const dateObject = {date: new Date()};
    dateObject.date.setFullYear(2001, 1, 1);
    dateObject.date.setUTCHours(1, 1, 1, 1);

    const otherDateObject = {date: new Date(dateObject.date.getTime())};
    otherDateObject.date.setFullYear(2002, 2, 2);
    otherDateObject.date.setUTCHours(2, 2, 2, 2);

    const dateObjectCopy = {date: new Date()};
    dateObjectCopy.date.setFullYear(2001, 1, 1);
    dateObjectCopy.date.setUTCHours(1, 1, 1, 1);

    const dateObjectFreezeClone = StateHelper.cloneObject(StateHelper.deepFreeze(dateObject));
    const dateObjectCloneFreeze = StateHelper.deepFreeze(StateHelper.cloneObject(dateObject));

    expect(dateObjectCloneFreeze === dateObject).toBeFalsy();
    expect(dateObjectFreezeClone === dateObject).toBeFalsy();
    expect(dateObjectCloneFreeze === dateObjectFreezeClone).toBeFalsy();

    expect(otherDateObject.date.getTime() === dateObject.date.getTime()).toBeFalsy();

    expect(dateObjectCopy.date.getTime() === dateObject.date.getTime()).toBeTruthy();
    expect(dateObjectFreezeClone.date.getTime() === dateObject.date.getTime()).toBeTruthy();
    expect(dateObjectCloneFreeze.date.getTime() === dateObject.date.getTime()).toBeTruthy();

    expect(JSON.stringify(dateObject)).toBe(JSON.stringify(dateObjectCopy));
    expect(JSON.stringify(dateObject)).toBe(JSON.stringify(dateObjectFreezeClone));
    expect(JSON.stringify(dateObject)).toBe(JSON.stringify(dateObjectCloneFreeze));

    expect(JSON.stringify(dateObject)).not.toBe(JSON.stringify(otherDateObject));

    const properties = ['setDate', 'setHours', 'setFullYear', 'setMilliseconds', 'setMinutes', 'setMonth', 'setSeconds',
      'setTime', 'setUTCDate', 'setUTCHours', 'setUTCFullYear', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
      'getDate', 'getDay', 'getFullYear', 'getHours', 'getMilliseconds', 'getMinutes', 'getMonth', 'getSeconds', 'getTimezoneOffset',
      'getTime', 'getUTCDate', 'getUTCDay', 'getUTCFullYear', 'getUTCHours', 'getUTCMilliseconds', 'getUTCMinutes', 'getUTCMonth',
      'getUTCSeconds', 'valueOf', 'toDateString', 'toString', 'toJSON', 'toLocaleDateString', 'toLocaleString', 'toLocaleTimeString',
      'toISOString', 'toTimeString', 'toUTCString'];

    expect(Object.getOwnPropertyNames(dateObjectCloneFreeze.date).length).toEqual(properties.length);
    Object.getOwnPropertyNames(dateObjectCloneFreeze.date).forEach(prop => {
      expect(properties.indexOf(prop) > -1).toBeTruthy();
      if (prop.startsWith('set')) {
        expect(() => {
          dateObjectCloneFreeze.date[prop](0);
        }).toThrow();
        const getProp = 'get' + prop.substr(3);

        expect(dateObjectCloneFreeze.date[getProp]()).toEqual(dateObjectCopy.date[getProp]());
        expect(dateObjectCloneFreeze.date[getProp]()).not.toEqual(otherDateObject.date[getProp]());
        (new Date())[prop].call(dateObjectCloneFreeze.date, otherDateObject.date[getProp]());
        expect(dateObjectCloneFreeze.date[getProp]()).toEqual(dateObjectCopy.date[getProp]());
      } else if (prop.startsWith('to') || prop.startsWith('get') || prop.endsWith('Day')) {
        expect(dateObjectCloneFreeze.date[prop]()).toEqual(dateObjectCopy.date[prop]());
      }
    });

    (new Date()).setTime.call(otherDateObject.date, dateObjectCloneFreeze.date.getTime());
    expect(otherDateObject.date.getTime() === dateObjectCopy.date.getTime()).toBeTruthy();
    expect(JSON.stringify(dateObjectCopy)).toBe(JSON.stringify(otherDateObject));
  }));


  it('Map should be unfrozen and cloned', inject([], () => {
    const map: Map<string, any[]> = new Map<string, any[]>();
    const obj = {a: 5};
    map.set('1', ['1.1', '1.2', obj]);
    map.set('0', ['0.2', '0.1']);
    const mapCopy = new Map(map);
    let mapFreezeClone = StateHelper.cloneObject(StateHelper.deepFreeze(map));

    expect(mapFreezeClone).toBeTruthy();
    expect(mapFreezeClone instanceof Map).toBeTruthy();
    expect(map === mapFreezeClone).toBeFalsy();
    expect(mapFreezeClone.get('0')).toEqual(['0.2', '0.1']);
    expect(mapFreezeClone.get('1')).toEqual(['1.1', '1.2', {a: 5}]);
    expect(Array.from(mapFreezeClone.keys())).toEqual(['1', '0']);

    expect(map.get('1')[2]).toEqual({a: 5});
    expect(map.get('1')[2] === obj).toBeTruthy();
    expect(mapFreezeClone.get('1')[2] === obj).toBeFalsy();
    expect(Object.isFrozen(map.get('1'))).toBeTruthy();
    expect(Object.isFrozen(map.get('1')[2])).toBeTruthy();
    expect(Object.isFrozen(mapFreezeClone.get('1'))).toBeFalsy();
    expect(Object.isFrozen(mapFreezeClone.get('1')[2])).toBeFalsy();

    expect(() => {
      map.get('1')[2].a = 6;
    }).toThrow();
    expect(() => {
      map.clear();
    }).toThrow();
    expect(() => {
      map.set('any', ['any']);
    }).toThrow();
    expect(() => {
      map.delete('any');
    }).toThrow();

    const beforeString = Array.from(mapCopy).join(', ');
    const beforeKeysString = Array.from(mapCopy.keys()).join(', ');
    const beforeValuesString = Array.from(mapCopy.values()).join(', ');
    const beforeEntriesString = Array.from(mapCopy.entries()).join(', ');
    new Map().clear.call(map);
    expect(map.size).toEqual(2);
    expect(Array.from(map).join(', ')).toEqual(beforeString);
    expect(Array.from(map.keys()).join(', ')).toEqual(beforeKeysString);
    expect(Array.from(map.values()).join(', ')).toEqual(beforeValuesString);
    expect(Array.from(map.entries()).join(', ')).toEqual(beforeEntriesString);

    expect(() => {
      mapFreezeClone.get('1')[2].a = 6;
    }).not.toThrow();
    expect(() => {
      mapFreezeClone.set('any', ['any']);
    }).not.toThrow();
    expect(() => {
      mapFreezeClone.delete('any');
    }).not.toThrow();
    expect(() => {
      mapFreezeClone.clear();
    }).not.toThrow();
    expect(mapFreezeClone.size).toEqual(0);

    new Map<any, any>().set.call(map, 'any', ['any']);
    expect(map.get('any')).toBeUndefined();
    new Map<any, any>().delete.call(map, '1');
    expect(map.keys()).toEqual(mapCopy.keys());
    expect(map.values()).toEqual(mapCopy.values());

    mapFreezeClone = StateHelper.cloneObject(map);
    expect(mapFreezeClone.keys()).toEqual(mapCopy.keys());
    expect(mapFreezeClone.values()).toEqual(mapCopy.values());
    mapFreezeClone = new Map(map);
    expect(mapFreezeClone.keys()).toEqual(mapCopy.keys());
    expect(mapFreezeClone.values()).toEqual(mapCopy.values());

    map.forEach((value, key) => {
      expect(mapCopy.get(key)).toEqual(value);
    });

    expect(map.has('1')).toBeTruthy();
    expect(map.get('1')).toEqual(['1.1', '1.2', {a: 5}]);
  }));

  it('Set should be unfrozen and cloned', inject([], () => {
    const set: Set<any> = new Set<any>();
    set.add('1.2');
    set.add('1');
    set.add('1.1');
    const obj = {a: 5};
    set.add(obj);
    const setCopy = new Set(set);
    let setFreezeClone = StateHelper.cloneObject(StateHelper.deepFreeze(set));

    expect(setFreezeClone).toBeTruthy();
    expect(setFreezeClone instanceof Set).toBeTruthy();
    expect(set === setFreezeClone).toBeFalsy();
    expect(Array.from(setFreezeClone)).toEqual(['1.2', '1', '1.1', {a: 5}]);
    expect(Array.from(set)).toEqual(['1.2', '1', '1.1', {a: 5}]);
    expect(setFreezeClone.has('1.2')).toBeTruthy();

    expect(Array.from(setFreezeClone)[3]).toEqual({a: 5});
    expect(Array.from(set)[3] === obj).toBeTruthy();
    expect(Array.from(setFreezeClone)[3] === obj).toBeFalsy();
    expect(Object.isFrozen(Array.from(set)[3])).toBeTruthy();
    expect(Object.isFrozen(Array.from(setFreezeClone)[3])).toBeFalsy();

    expect(() => {
      Array.from(set)[3].a = 6;
    }).toThrow();
    expect(() => {
      set.clear();
    }).toThrow();
    expect(() => {
      set.add('any');
    }).toThrow();
    expect(() => {
      set.delete('any');
    }).toThrow();

    const beforeString = Array.from(set).join(', ');
    const beforeKeysString = Array.from(set.keys()).join(', ');
    const beforeValuesString = Array.from(set.values()).join(', ');
    const beforeEntriesString = Array.from(set.entries()).join(', ');
    new Set().clear.call(set);
    expect(set.size).toEqual(4);
    expect(Array.from(set).join(', ')).toEqual(beforeString);
    expect(Array.from(set.keys()).join(', ')).toEqual(beforeKeysString);
    expect(Array.from(set.values()).join(', ')).toEqual(beforeValuesString);
    expect(Array.from(set.entries()).join(', ')).toEqual(beforeEntriesString);

    expect(() => {
      setFreezeClone.add('any');
    }).not.toThrow();
    expect(() => {
      setFreezeClone.delete('any');
    }).not.toThrow();
    expect(() => {
      setFreezeClone.clear();
    }).not.toThrow();
    expect(setFreezeClone.size).toEqual(0);

    new Set<any>().add.call(set, 'any');
    expect(set.has('any')).toBeFalsy();
    new Set<any>().delete.call(set, '1.2');
    expect(set.keys()).toEqual(setCopy.keys());
    expect(set.values()).toEqual(setCopy.values());

    setFreezeClone = StateHelper.cloneObject(set);
    expect(setFreezeClone.keys()).toEqual(setCopy.keys());
    expect(setFreezeClone.values()).toEqual(setCopy.values());
    setFreezeClone = new Set(set);
    expect(setFreezeClone.keys()).toEqual(setCopy.keys());
    expect(setFreezeClone.values()).toEqual(setCopy.values());

    set.forEach((value) => {
      expect(setCopy.has(value)).toBeTruthy();
    });

  }));
});

