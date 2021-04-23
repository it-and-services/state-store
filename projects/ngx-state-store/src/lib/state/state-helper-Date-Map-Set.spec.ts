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
    const o2 = StateHelper.cloneObject(StateHelper.deepFreeze(map));

    expect(o2).toBeTruthy();
    expect(o2 instanceof Map).toBeTruthy();
    expect(map === o2).toBeFalsy();
    expect(o2.get('0')).toEqual(['0.2', '0.1']);
    expect(o2.get('1')).toEqual(['1.1', '1.2', {a: 5}]);
    expect(Array.from(o2.keys())).toEqual(['1', '0']);

    expect(map.get('1')[2]).toEqual({a: 5});
    expect(map.get('1')[2] === obj).toBeTruthy();
    expect(o2.get('1')[2] === obj).toBeFalsy();
    expect(Object.isFrozen(map.get('1'))).toBeTruthy();
    expect(Object.isFrozen(map.get('1')[2])).toBeTruthy();
    expect(Object.isFrozen(o2.get('1'))).toBeFalsy();
    expect(Object.isFrozen(o2.get('1')[2])).toBeFalsy();

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

    expect(() => {
      o2.get('1')[2].a = 6;
    }).not.toThrow();
    expect(() => {
      o2.set('any', ['any']);
    }).not.toThrow();
    expect(() => {
      o2.delete('any');
    }).not.toThrow();
    expect(() => {
      o2.clear();
    }).not.toThrow();
    expect(o2.size).toEqual(0);

  }));

  it('Set should be unfrozen and cloned', inject([], () => {
    const o: Set<any> = new Set<any>();
    o.add('1.2');
    o.add('1');
    o.add('1.1');
    const obj = {a: 5};
    o.add(obj);
    const o2 = StateHelper.cloneObject(StateHelper.deepFreeze(o));

    expect(o2).toBeTruthy();
    expect(o2 instanceof Set).toBeTruthy();
    expect(o === o2).toBeFalsy();
    expect(Array.from(o2)).toEqual(['1.2', '1', '1.1', {a: 5}]);
    expect(Array.from(o)).toEqual(['1.2', '1', '1.1', {a: 5}]);

    expect(Array.from(o2)[3]).toEqual({a: 5});
    expect(Array.from(o)[3] === obj).toBeTruthy();
    expect(Array.from(o2)[3] === obj).toBeFalsy();
    expect(Object.isFrozen(Array.from(o)[3])).toBeTruthy();
    expect(Object.isFrozen(Array.from(o2)[3])).toBeFalsy();

    expect(() => {
      Array.from(o)[3].a = 6;
    }).toThrow();
    expect(() => {
      o.clear();
    }).toThrow();
    expect(() => {
      o.add('any');
    }).toThrow();
    expect(() => {
      o.delete('any');
    }).toThrow();

    const beforeString = Array.from(o).join(', ');
    const beforeKeysString = Array.from(o.keys()).join(', ');
    const beforeValuesString = Array.from(o.values()).join(', ');
    const beforeEntriesString = Array.from(o.entries()).join(', ');
    new Set().clear.call(o);
    expect(o.size).toEqual(4);
    expect(Array.from(o).join(', ')).toEqual(beforeString);
    expect(Array.from(o.keys()).join(', ')).toEqual(beforeKeysString);
    expect(Array.from(o.values()).join(', ')).toEqual(beforeValuesString);
    expect(Array.from(o.entries()).join(', ')).toEqual(beforeEntriesString);

    expect(() => {
      o2.add('any');
    }).not.toThrow();
    expect(() => {
      o2.delete('any');
    }).not.toThrow();
    expect(() => {
      o2.clear();
    }).not.toThrow();
    expect(o2.size).toEqual(0);
  }));
});

