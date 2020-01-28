import { inject, TestBed } from '@angular/core/testing';
import { StoreLogPlugin } from './store-log-plugin';

describe('StoreLogPlugin', () => {
  let storeLogPlugin: StoreLogPlugin;
  describe('active', () => {
    beforeEach(() => {
      storeLogPlugin = new StoreLogPlugin('test-store', true, 1);
      spyOn(console, 'log');
      TestBed.configureTestingModule({
        providers: []
      });
    });
    it('nothing by dispatchBefore', inject([], () => {
      storeLogPlugin.dispatchBefore();
      expect(console.log).not.toHaveBeenCalled();
    }));
    it('log by dispatchAfter', inject([], () => {
      storeLogPlugin.dispatchAfter('ActionId', {prop: 1}, 22);
      expect(console.log).toHaveBeenCalledWith('22. Action end:   ActionId', {prop: 1});
    }));
  });
  describe('inactive', () => {
    beforeEach(() => {
      storeLogPlugin = new StoreLogPlugin('test-store');
      spyOn(console, 'log');
      TestBed.configureTestingModule({
        providers: []
      });
    });
    it('nothing by dispatchBefore', inject([], () => {
      storeLogPlugin.dispatchBefore();
      expect(console.log).not.toHaveBeenCalled();
    }));
    it('nothing by dispatchAfter', inject([], () => {
      storeLogPlugin.dispatchAfter('ActionId', {prop: 1}, 22);
      expect(console.log).not.toHaveBeenCalled();
    }));
  });
});

