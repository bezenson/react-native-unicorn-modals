import { HIDE_ANIMATION_FINISHED, HIDE_ANIMATION_START, SHOW_MODAL } from '../action-types';
import { hideAnimationFinished, hideAnimationStart, showModal } from '../action-creators';

describe('action-creators', () => {
  test('showModal', () => {
    const componentName = 'testComponent';
    const data = { myData: 123 };
    const options = { cancelable: false };

    expect(showModal(componentName, data, options)).toEqual({
      type: SHOW_MODAL,
      payload: {
        componentName,
        data,
        options,
      },
    });
  });

  test('hideAnimationStart', () => {
    expect(hideAnimationStart()).toEqual({ type: HIDE_ANIMATION_START });
  });

  test('hideAnimationFinished', () => {
    expect(hideAnimationFinished()).toEqual({ type: HIDE_ANIMATION_FINISHED });
  });
});
