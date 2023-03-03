import { inject, TestBed } from '@angular/core/testing';
import { StateHelper } from './state-helper';

describe('StateHelper - cyclic dependencies tests;', () => {
  let funk;
  let funk2;
  let complexObject;
  let complexObject2;
  let complexObject3;
  const checkExpectations = (cloneSource, clone) => {

    expect(clone === cloneSource).withContext('; the clone is not the source').toBeFalsy();

    expect(cloneSource.funk).withContext('; the source has funk (1)').toBeTruthy();
    expect(cloneSource.funk2).withContext('; the source has funk2').toBeTruthy();
    expect(cloneSource.complexObject).withContext('; the source has complexObject').toBeTruthy();
    expect(cloneSource.complexObject2).withContext('; the source has complexObject2').toBeTruthy();
    expect(cloneSource.complexObject3).withContext('; the source has complexObject3').toBeTruthy();

    expect(clone.funk).withContext('; the clone has funk (1)').toBeTruthy();
    expect(clone.funk2).withContext('; the clone has funk2').toBeTruthy();
    expect(clone.complexObject).withContext('; the clone has complexObject').toBeTruthy();
    expect(clone.complexObject2).withContext('; the clone has complexObject2').toBeTruthy();
    expect(clone.complexObject3).withContext('; the clone has complexObject3').toBeTruthy();

    expect(clone.funk === cloneSource.funk).withContext('; the funk of source and clone are different (1)').toBeFalsy();
    expect(clone.funk2 === cloneSource.funk2).withContext('; the funk2 of source and clone are different (1)').toBeFalsy();
    expect(clone.complexObject === cloneSource.complexObject).withContext('; the complexObject of source and clone are different').toBeFalsy();
    expect(clone.complexObject2 === cloneSource.complexObject2).withContext('; the complexObject2 of source and clone are different').toBeFalsy();
    expect(clone.complexObject3 === cloneSource.complexObject3).withContext('; the complexObject3 of source and clone are different (1)').toBeFalsy();

    expect(cloneSource.complexObject3 === cloneSource.complexObject2.prop[0].subArray[0].prop[0].complexObject3)
      .withContext('; the complexObject3 of source in cyclic dependencies is the same (1)').toBeTruthy();
    expect(cloneSource.complexObject3 === clone.complexObject2.prop[0].subArray[0].prop[0].complexObject3)
      .withContext('; the complexObject3 of source and clone are different (2)').toBeFalsy();
    expect(clone.complexObject3 === clone.complexObject2.prop[0].subArray[0].prop[0].complexObject3)
      .withContext('; the complexObject3 of clone in cyclic dependencies is the same (1)').toBeTruthy();
    expect(clone.complexObject3 === cloneSource.complexObject2.prop[0].subArray[0].prop[0].complexObject3)
      .withContext('; the complexObject3 of source and clone are different (3)').toBeFalsy();

    expect(cloneSource.complexObject3 === cloneSource.complexObject.prop[0].complexObject3)
      .withContext('; the complexObject3 of source in cyclic dependencies is the same (2)').toBeTruthy();
    expect(clone.complexObject3 === clone.complexObject.prop[0].complexObject3)
      .withContext('; the complexObject3 of clone in cyclic dependencies is the same (2)').toBeTruthy();

    // reference to itself
    expect(cloneSource.complexObject === cloneSource.complexObject.complexObject)
      .withContext('; the complexObject of source in cyclic dependencies is the same').toBeTruthy();
    expect(clone.complexObject === clone.complexObject.complexObject)
      .withContext('; the complexObject of clone in cyclic dependencies is the same').toBeTruthy();

    // functions in cyclic dependencies

    expect(cloneSource.funk === cloneSource.complexObject2.prop[0].subArray[1])
      .withContext('; the funk of source in cyclic dependencies is the same (1)').toBeTruthy();
    expect(cloneSource.funk === clone.complexObject2.prop[0].subArray[1])
      .withContext('; the funk of source and clone are different (2)').toBeFalsy();
    expect(clone.funk === clone.complexObject2.prop[0].subArray[1])
      .withContext('; the funk of clone in cyclic dependencies is the same (1)').toBeTruthy();
    expect(clone.funk === cloneSource.complexObject2.prop[0].subArray[1])
      .withContext('; the funk of source and clone are different (3)').toBeFalsy();

    expect(cloneSource.funk2 === cloneSource.funk.funk2).withContext('; the funk2 of source in cyclic dependencies is the same').toBeTruthy();
    expect(clone.funk2 === cloneSource.funk.funk2).withContext('; the funk2 of source and clone are different (2)').toBeFalsy();
    expect(clone.funk2 === clone.funk.funk2).withContext('; the funk2 of clone in cyclic dependencies is the same').toBeTruthy();
    expect(cloneSource.funk2 === clone.funk.funk2).withContext('; the funk2 of source and clone are different (3)').toBeFalsy();

    expect(cloneSource.funk2.funk).withContext('; the source has funk (2)').toBeTruthy();
    expect(cloneSource.funk2.funk === cloneSource.funk).withContext('; the funk of source in cyclic dependencies is the same (2)').toBeTruthy();
    expect(clone.funk2.funk).withContext('; the clone has funk (2)').toBeTruthy();
    expect(clone.funk2.funk === cloneSource.funk).withContext('; the funk of source and clone are different (4)').toBeFalsy();
    expect(clone.funk2.funk === clone.funk).withContext('; the funk of clone in cyclic dependencies is the same (2)').toBeTruthy();
    expect(cloneSource.funk2.funk === clone.funk).withContext('; the funk of source and clone are different (5)').toBeFalsy();
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

