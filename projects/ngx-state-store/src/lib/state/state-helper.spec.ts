import { inject, TestBed } from '@angular/core/testing';
import { StateHelper } from './state-helper';

describe('StateHelper - clone and freeze tests;', () => {
  let get77;
  let simpleObject;
  let complexObject;
  beforeEach(() => {
    get77 = () => 77;
    get77.prop7 = 7;
    simpleObject = {propOne: 1};
    complexObject = {prop: [{one: [{oneOne: 1}, {}]}, {two: ['2']}]};
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
    expect(clone === window).withContext('By clone the window the return object is the same').toBeTruthy();
  }));

  it('do not freeze the window', inject([], () => {
    const frozenWindow = StateHelper.deepFreeze(window);
    expect(frozenWindow).toBeTruthy();
    expect(frozenWindow === window).withContext('By freeze the window the return object is the same').toBeTruthy();
    expect(Object.isFrozen(frozenWindow)).withContext('It is not allowed to freeze the window').toBeFalsy();
  }));

  it('simple object should be frozen', inject([], () => {
    const o = StateHelper.deepFreeze(simpleObject);
    expect(o === simpleObject).toBeTruthy();
    expect(() => o.propOne = 2).toThrowError();
  }));

  it('function should be frozen', inject([], () => {
    const o = StateHelper.deepFreeze(get77);
    expect(o === get77).toBeTruthy();
    expect(() => o.prop7 = 2).toThrowError();
    expect(o.call(o)).toBe(77);
  }));

  it('complex object should be unfrozen and cloned', inject([], () => {
    let o = StateHelper.deepFreeze(complexObject);
    expect(o === complexObject).toBeTruthy();
    expect(o.prop[0].one[0].oneOne).toBe(1);
    o = StateHelper.cloneObject(o);
    expect(o.prop[0].one[0].oneOne = 2).toBe(2);
  }));

  it('complex object should be unfrozen and cloned 2', inject([], () => {
    let o = StateHelper.deepFreeze(complexObject);
    expect(o === complexObject).toBeTruthy();
    expect(o.prop[1].two[0]).toBe('2');
    o = StateHelper.cloneObject(o);
    expect((o.prop[1].two = ['3'])[0]).toBe('3');
  }));

  it('function should be unfrozen and cloned', inject([], () => {
    let o = StateHelper.deepFreeze(get77);
    expect(o === get77).toBeTruthy();
    expect(get77.prop7).toBe(7);
    expect(o.call(o)).toBe(77);
    o = StateHelper.cloneObject(o);
    expect(o.prop7 = 2).toBe(2);
    expect(o.call(o)).toBe(77);
  }));

  it('function should not cloned', inject([], () => {
    let o = StateHelper.deepFreeze(get77);
    expect(o === get77).toBeTruthy();
    expect(get77.prop7).toBe(7);
    expect(o.call(o)).toBe(77);
    o = StateHelper.cloneObject(o, false);
    expect(o).toBeFalsy();
  }));

  it('this reference in the function remains the same', inject([], () => {
    const of = {
      prop: 77,
      // eslint-disable-next-line object-shorthand
      funk: function(add: number): number {
        return this.prop + add;
      }
    };
    let o = StateHelper.deepFreeze(of);
    expect(o === of).toBeTruthy();
    expect(o.funk(1)).toBe(78);
    expect(o.funk.call(o, 1)).toBe(78);
    o = StateHelper.cloneObject(o);
    expect(o.funk(1)).toBe(78);
    expect(o.funk.call(o, 1)).toBe(78);
  }));

  it('the function of an object should not be cloned', inject([], () => {
    const of = {
      prop: 88,
      // eslint-disable-next-line object-shorthand
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

  it('JSON.stringify() of the objects must be identical', inject([], () => {
    const origin = JSON.stringify(complexObject);
    const frozen = JSON.stringify(StateHelper.deepFreeze(complexObject));
    expect(origin === frozen).toBeTruthy();
    const unfrozen = JSON.stringify(StateHelper.cloneObject(StateHelper.deepFreeze(complexObject)));
    expect(frozen).toBe(unfrozen);
  }));

  it('JSON.stringify() of the functions must be identical', inject([], () => {
    const origin = JSON.stringify(get77);
    const frozen = JSON.stringify(StateHelper.deepFreeze(get77));
    expect(origin).toBe(frozen);
    const unfrozen = JSON.stringify(StateHelper.cloneObject(StateHelper.deepFreeze(get77)));
    expect(frozen).toBe(unfrozen);
  }));
});

