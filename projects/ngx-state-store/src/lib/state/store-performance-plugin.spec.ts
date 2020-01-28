import { inject, TestBed } from '@angular/core/testing';
import { StorePerformancePlugin } from './store-performance-plugin';

describe('StorePerformancePlugin', () => {
  let storePerformancePlugin: StorePerformancePlugin;
  describe('active', () => {
    beforeEach(() => {
      storePerformancePlugin = new StorePerformancePlugin('test-store', true);
      spyOn(performance, 'now');
      TestBed.configureTestingModule({
        providers: []
      });
    });
    it('time save by dispatchBefore', inject([], () => {
      storePerformancePlugin.dispatchBefore('ActionId', {prop: 1}, 0);
      expect(performance.now).toHaveBeenCalled();
    }));
    it('time save by dispatchAfter', inject([], () => {
      storePerformancePlugin.dispatchBefore('ActionId', {prop: 1}, 0);
      storePerformancePlugin.dispatchAfter('ActionId', {prop: 1}, 0);
      expect(performance.now).toHaveBeenCalled();
    }));
  });
  describe('inactive', () => {
    beforeEach(() => {
      storePerformancePlugin = new StorePerformancePlugin('test-store');
      spyOn(performance, 'now');
      TestBed.configureTestingModule({
        providers: []
      });
    });
    it('nothing by dispatchBefore', inject([], () => {
      storePerformancePlugin.dispatchBefore('ActionId', {prop: 1}, 0);
      expect(performance.now).not.toHaveBeenCalled();
    }));
    it('nothing by dispatchAfter', inject([], () => {
      storePerformancePlugin.dispatchBefore('ActionId', {prop: 1}, 0);
      storePerformancePlugin.dispatchAfter('ActionId', {prop: 1}, 0);
      expect(performance.now).not.toHaveBeenCalled();
    }));
  });
});

