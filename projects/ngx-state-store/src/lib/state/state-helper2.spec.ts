import { inject, TestBed } from '@angular/core/testing';
import { StateHelper } from './state-helper';

describe('StateHelper - cyclic dependencies tests;', () => {
  let funk;
  let funk2;
  let complexObject;
  let complexObject2;
  let complexObject3;
  const checkExpectations = (cloneSource, clone) => {

    expect(clone === cloneSource).toBeFalsy('; the clone is not the source');

    expect(cloneSource.funk).toBeTruthy('; the source has funk (1)');
    expect(cloneSource.funk2).toBeTruthy('; the source has funk2');
    expect(cloneSource.complexObject).toBeTruthy('; the source has complexObject');
    expect(cloneSource.complexObject2).toBeTruthy('; the source has complexObject2');
    expect(cloneSource.complexObject3).toBeTruthy('; the source has complexObject3');

    expect(clone.funk).toBeTruthy('; the clone has funk (1)');
    expect(clone.funk2).toBeTruthy('; the clone has funk2');
    expect(clone.complexObject).toBeTruthy('; the clone has complexObject');
    expect(clone.complexObject2).toBeTruthy('; the clone has complexObject2');
    expect(clone.complexObject3).toBeTruthy('; the clone has complexObject3');

    expect(clone.funk === cloneSource.funk).toBeFalsy('; the funk of source and clone are different (1)');
    expect(clone.funk2 === cloneSource.funk2).toBeFalsy('; the funk2 of source and clone are different (1)');
    expect(clone.complexObject === cloneSource.complexObject).toBeFalsy('; the complexObject of source and clone are different');
    expect(clone.complexObject2 === cloneSource.complexObject2).toBeFalsy('; the complexObject2 of source and clone are different');
    expect(clone.complexObject3 === cloneSource.complexObject3).toBeFalsy('; the complexObject3 of source and clone are different (1)');

    expect(cloneSource.complexObject3 === cloneSource.complexObject2.prop[0].subArray[0].prop[0].complexObject3)
      .toBeTruthy('; the complexObject3 of source in cyclic dependencies is the same (1)');
    expect(cloneSource.complexObject3 === clone.complexObject2.prop[0].subArray[0].prop[0].complexObject3)
      .toBeFalsy('; the complexObject3 of source and clone are different (2)');
    expect(clone.complexObject3 === clone.complexObject2.prop[0].subArray[0].prop[0].complexObject3)
      .toBeTruthy('; the complexObject3 of clone in cyclic dependencies is the same (1)');
    expect(clone.complexObject3 === cloneSource.complexObject2.prop[0].subArray[0].prop[0].complexObject3)
      .toBeFalsy('; the complexObject3 of source and clone are different (3)');

    expect(cloneSource.complexObject3 === cloneSource.complexObject.prop[0].complexObject3)
      .toBeTruthy('; the complexObject3 of source in cyclic dependencies is the same (2)');
    expect(clone.complexObject3 === clone.complexObject.prop[0].complexObject3)
      .toBeTruthy('; the complexObject3 of clone in cyclic dependencies is the same (2)');

    // reference to itself
    expect(cloneSource.complexObject === cloneSource.complexObject.complexObject)
      .toBeTruthy('; the complexObject of source in cyclic dependencies is the same');
    expect(clone.complexObject === clone.complexObject.complexObject)
      .toBeTruthy('; the complexObject of clone in cyclic dependencies is the same');

    // functions in cyclic dependencies

    expect(cloneSource.funk === cloneSource.complexObject2.prop[0].subArray[1])
      .toBeTruthy('; the funk of source in cyclic dependencies is the same (1)');
    expect(cloneSource.funk === clone.complexObject2.prop[0].subArray[1])
      .toBeFalsy('; the funk of source and clone are different (2)');
    expect(clone.funk === clone.complexObject2.prop[0].subArray[1])
      .toBeTruthy('; the funk of clone in cyclic dependencies is the same (1)');
    expect(clone.funk === cloneSource.complexObject2.prop[0].subArray[1])
      .toBeFalsy('; the funk of source and clone are different (3)');

    expect(cloneSource.funk2 === cloneSource.funk.funk2).toBeTruthy('; the funk2 of source in cyclic dependencies is the same');
    expect(clone.funk2 === cloneSource.funk.funk2).toBeFalsy('; the funk2 of source and clone are different (2)');
    expect(clone.funk2 === clone.funk.funk2).toBeTruthy('; the funk2 of clone in cyclic dependencies is the same');
    expect(cloneSource.funk2 === clone.funk.funk2).toBeFalsy('; the funk2 of source and clone are different (3)');

    expect(cloneSource.funk2.funk).toBeTruthy('; the source has funk (2)');
    expect(cloneSource.funk2.funk === cloneSource.funk).toBeTruthy('; the funk of source in cyclic dependencies is the same (2)');
    expect(clone.funk2.funk).toBeTruthy('; the clone has funk (2)');
    expect(clone.funk2.funk === cloneSource.funk).toBeFalsy('; the funk of source and clone are different (4)');
    expect(clone.funk2.funk === clone.funk).toBeTruthy('; the funk of clone in cyclic dependencies is the same (2)');
    expect(cloneSource.funk2.funk === clone.funk).toBeFalsy('; the funk of source and clone are different (5)');
  };

  beforeEach(() => {

    // objects and functions with cyclic dependencies

    funk = () => 77;
    funk2 = () => 88;
    funk.funk2 = funk2;
    funk2.funk = funk;

    complexObject = {prop: [{complexObject3: undefined}], complexObject: undefined};
    complexObject2 = {prop: [{subArray: [complexObject, funk]}]};
    complexObject3 = {};
    complexObject3.complexObject2 = complexObject2;

    funk2.complexObject3 = complexObject3;
    complexObject.prop[0].complexObject3 = complexObject3;
    // reference to itself
    complexObject.complexObject = complexObject;

    TestBed.configureTestingModule({
      providers: []
    });
  });

  it('Cyclic dependencies by clone must be resolved', inject([], () => {
    const cloneSource = {funk, funk2, complexObject, complexObject2, complexObject3};
    const clone = StateHelper.cloneObject(cloneSource);

    checkExpectations(cloneSource, clone);

  }));

  it('Cyclic dependencies by freeze and clone must be resolved', inject([], () => {
    const cloneSource = {funk, funk2, complexObject, complexObject2, complexObject3};
    const clone = StateHelper.cloneObject(StateHelper.deepFreeze(cloneSource));

    checkExpectations(cloneSource, clone);

  }));
});

