import { inject, TestBed } from '@angular/core/testing';
import { StorePerformancePlugin } from './store-performance-plugin';

describe('StorePerformancePlugin', () => {
  let storePerformancePlugin: StorePerformancePlugin;
  describe('active', () => {
    beforeEach(() => {
      storePerformancePlugin = new StorePerformancePlugin('test-store', true, 100);
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
    it('invalid order ignored', inject([], () => {
      storePerformancePlugin.dispatchBefore('ActionId', {prop: 1}, 10);
      storePerformancePlugin.dispatchAfter('ActionId', {prop: 1}, 5);
      storePerformancePlugin.dispatchAfter('ActionId', {prop: 1}, 10);
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
    it('reactivate timekeeping', inject([], () => {
      storePerformancePlugin.dispatchBefore('ActionId', {prop: 1}, 1);
      storePerformancePlugin.dispatchAfter('ActionId', {prop: 1}, 1);
      expect(performance.now).not.toHaveBeenCalled();
      // eslint-disable-next-line dot-notation, @typescript-eslint/dot-notation
      storePerformancePlugin['settings']['timekeeping'] = true;
      storePerformancePlugin.dispatchBefore('ActionId', {prop: 1}, 1);
      storePerformancePlugin.dispatchAfter('ActionId', {prop: 1}, 1);
      expect(performance.now).toHaveBeenCalled();
    }));
  });
  describe('invalid limit', () => {
    beforeEach(() => {
      storePerformancePlugin = new StorePerformancePlugin('test-store', true, -1);
      spyOn(performance, 'now');
      TestBed.configureTestingModule({
        providers: []
      });
    });
    it('invalid limit corrected', inject([], () => {
      storePerformancePlugin.dispatchBefore('ActionId', {prop: 1}, 0);
      storePerformancePlugin.dispatchAfter('ActionId', {prop: 1}, 0);
      expect(performance.now).toHaveBeenCalled();
    }));
  });
});

