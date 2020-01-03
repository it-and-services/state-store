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
  it('should be unfrozen', inject([], () => {
    let o = StateHelper.deepFreeze({prop: 1});
    o = StateHelper.unfreeze(o);
    expect(o.prop = 2).toBe(2);
  }));
});

