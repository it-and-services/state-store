import { inject, TestBed } from '@angular/core/testing';
import { StateHelper } from './state-helper';

describe('StateHelper - clone and freeze tests;', () => {
  let funk;
  let simpleObject;
  let complexObject;
  beforeEach(() => {
    funk = () => 77;
    funk.x = 7;
    simpleObject = {prop: 1};
    complexObject = {prop: [{one: [{oneOne: 4}, {}]}, {two: ['5']}]};
    TestBed.configureTestingModule({
      providers: []
    });
  });

  it('clone is null', inject([], () => {
    const clone = StateHelper.cloneObject(null);
    expect(clone).toBeFalsy();
  }));

  it('do not clone the window', inject([], () => {
    const clone = StateHelper.cloneObject(window);
    expect(clone).toBeTruthy();
    expect(clone === window).toBeTruthy('By clone the window the return object is the same');
  }));

  it('do not freeze the window', inject([], () => {
    const frozenWindow = StateHelper.deepFreeze(window);
    expect(frozenWindow).toBeTruthy();
    expect(frozenWindow === window).toBeTruthy('By freeze the window the return object is the same');
    expect(Object.isFrozen(frozenWindow)).toBeFalsy('It is not allowed to freeze the window');
  }));

  it('simple object should be frozen', inject([], () => {
    const o = StateHelper.deepFreeze(simpleObject);
    expect(o === simpleObject).toBeTruthy();
    expect(() => o.prop = 2).toThrowError();
  }));

  it('function should be frozen', inject([], () => {
    const o = StateHelper.deepFreeze(funk);
    expect(o === funk).toBeTruthy();
    expect(() => o.x = 2).toThrowError();
    expect(o.call(o)).toBe(77);
  }));

  it('complex object should be unfrozen and cloned', inject([], () => {
    let o = StateHelper.deepFreeze(complexObject);
    expect(o === complexObject).toBeTruthy();
    expect(o.prop[0].one[0].oneOne).toBe(4);
    o = StateHelper.cloneObject(o);
    expect(o.prop[0].one[0].oneOne = 2).toBe(2);
  }));

  it('complex object should be unfrozen and cloned 2', inject([], () => {
    let o = StateHelper.deepFreeze(complexObject);
    expect(o === complexObject).toBeTruthy();
    expect(o.prop[1].two[0]).toBe('5');
    o = StateHelper.cloneObject(o);
    expect((o.prop[1].two = ['6'])[0]).toBe('6');
  }));

  it('function should be unfrozen and cloned', inject([], () => {
    let o = StateHelper.deepFreeze(funk);
    expect(o === funk).toBeTruthy();
    expect(funk.x).toBe(7);
    expect(o.call(o)).toBe(77);
    o = StateHelper.cloneObject(o);
    expect(o.x = 2).toBe(2);
    expect(o.call(o)).toBe(77);
  }));

  it('function should not cloned', inject([], () => {
    let o = StateHelper.deepFreeze(funk);
    expect(o === funk).toBeTruthy();
    expect(funk.x).toBe(7);
    expect(o.call(o)).toBe(77);
    o = StateHelper.cloneObject(o, false);
    expect(o).toBeFalsy();
  }));

  it('this reference in the function remains the same', inject([], () => {
    const of = {
      prop: 88,
      // tslint:disable-next-line:object-literal-shorthand
      funk: function(add: number): number {
        return this.prop + add;
      }
    };
    let o = StateHelper.deepFreeze(of);
    expect(o === of).toBeTruthy();
    expect(o.funk(1)).toBe(89);
    expect(o.funk.call(o, 1)).toBe(89);
    o = StateHelper.cloneObject(o);
    expect(o.funk(1)).toBe(89);
    expect(o.funk.call(o, 1)).toBe(89);
  }));

  it('the function of an object should not be cloned', inject([], () => {
    const of = {
      prop: 88,
      // tslint:disable-next-line:object-literal-shorthand
      funk: function(add: number): number {
        return this.prop + add;
      }
    };
    let o = StateHelper.deepFreeze(of);
    expect(o === of).toBeTruthy();
    expect(o.funk(1)).toBe(89);
    expect(o.funk.call(o, 1)).toBe(89);
    o = StateHelper.cloneObject(o, false);
    expect(o.prop).toBe(88);
    expect(o.funk).toBeFalsy();
    expect(o as any).toEqual({prop: 88});
  }));

  it('Date should be unfrozen and cloned', inject([], () => {
    const dateObject = {date: new Date()};
    const timeMillis = dateObject.date.getTime();
    let o = StateHelper.deepFreeze(dateObject);
    expect(o === dateObject).toBeTruthy();
    expect(timeMillis).toBe((o.date as Date).getTime());
    o = StateHelper.cloneObject(o);
    expect(o === dateObject).not.toBeTruthy();
    expect(o.date.getTime).toBeTruthy();
    expect(o.date.getTime()).toBe(timeMillis);
    expect(JSON.stringify(dateObject)).toBe(JSON.stringify(o));
  }));

  it('JSON.stringify() of the objects must be identical', inject([], () => {
    const origin = JSON.stringify(complexObject);
    const frozen = JSON.stringify(StateHelper.deepFreeze(complexObject));
    expect(origin === frozen).toBeTruthy();
    const unfrozen = JSON.stringify(StateHelper.cloneObject(StateHelper.deepFreeze(complexObject)));
    expect(frozen).toBe(unfrozen);
  }));

  it('JSON.stringify() of the functions must be identical', inject([], () => {
    const origin = JSON.stringify(funk);
    const frozen = JSON.stringify(StateHelper.deepFreeze(funk));
    expect(origin).toBe(frozen);
    const unfrozen = JSON.stringify(StateHelper.cloneObject(StateHelper.deepFreeze(funk)));
    expect(frozen).toBe(unfrozen);
  }));
});

