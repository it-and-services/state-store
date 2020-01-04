import { inject, TestBed } from '@angular/core/testing';
import { StateHelper } from './state-helper';

describe('StateHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });
  it('should be frozen', inject([], () => {
    const o = StateHelper.deepFreeze({prop: 1});
    expect(() => o.prop = 2).toThrowError();
  }));
  it('function should be frozen', inject([], () => {
    const funk = () => 77;
    funk.x = 7;
    const o = StateHelper.deepFreeze(funk);
    expect(() => o.x = 2).toThrowError();
    expect(o.call(o)).toBe(77);
  }));
  it('should be unfrozen', inject([], () => {
    let o = StateHelper.deepFreeze({prop: [{one: [{oneOne: 4}, {}]}, {two: ['5']}]});
    expect(o.prop[0].one[0].oneOne).toBe(4);
    o = StateHelper.cloneObject(o);
    expect(o.prop[0].one[0].oneOne = 2).toBe(2);
  }));
  it('should be unfrozen 2', inject([], () => {
    let o = StateHelper.deepFreeze({prop: [{one: [{oneOne: 4}, {}]}, {two: ['5']}]});
    expect(o.prop[1].two[0]).toBe('5');
    o = StateHelper.cloneObject(o);
    expect((o.prop[1].two = ['6'])[0]).toBe('6');
  }));
  it('function should be unfrozen', inject([], () => {
    const funk = () => 77;
    funk.x = 7;
    let o = StateHelper.deepFreeze(funk);
    expect(funk.x).toBe(7);
    expect(o.call(o)).toBe(77);
    o = StateHelper.cloneObject(o);
    expect(o.x = 2).toBe(2);
    expect(o.call()).toBe(77);
    console.log(o.name + ' ' + o.length);
  }));
});

