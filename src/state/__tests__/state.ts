import { mergeOptionsWithDefault, reducer } from '../state';
import type { ReducerState, RenderItemOptions } from '../../types';
import { hideAnimationFinished, hideAnimationStart, showModal } from '../action-creators';

describe('mergeOptionsWithDefault', () => {
  test('should return default options if no options passed', () => {
    const expected: RenderItemOptions = {
      cancelable: true,
    };
    expect(mergeOptionsWithDefault()).toEqual(expected);
    expect(mergeOptionsWithDefault({})).toEqual(expected);
  });

  test('should rewrite default options', () => {
    expect(mergeOptionsWithDefault({ cancelable: false })).toEqual({
      cancelable: false,
    });
  });
});

describe('reducer', () => {
  describe('SHOW_MODAL', () => {
    const state: ReducerState = {
      renderList: [],
    };
    const action = showModal('test', { prop: 123 });
    const newState = reducer(state, action);

    test('should add new render item', () => {
      expect(newState.renderList.length).toBe(1);
    });

    test('added item should be `visible` and have passed data inside', () => {
      expect(newState.renderList[0]).toEqual({
        componentName: 'test',
        data: { prop: 123 },
        options: { cancelable: true },
        visible: true,
      });
    });
  });

  describe('HIDE_ANIMATION_START', () => {
    const state: ReducerState = {
      renderList: [
        {
          componentName: 'test',
          data: { prop: 123 },
          options: { cancelable: true },
          visible: true,
        },
        {
          componentName: 'test',
          data: { prop: 432 },
          options: { cancelable: true },
          visible: true,
        },
      ],
    };
    const action = hideAnimationStart();
    const newState = reducer(state, action);

    test('should keep the same number of items in array when animation started', () => {
      expect(newState.renderList.length).toBe(2);
    });

    test('should not change data, only `visible` of first item should become `false`', () => {
      expect(newState.renderList).toEqual([
        {
          componentName: 'test',
          data: { prop: 123 },
          options: { cancelable: true },
          visible: false,
        },
        {
          componentName: 'test',
          data: { prop: 432 },
          options: { cancelable: true },
          visible: true,
        },
      ]);
    });
  });

  describe('HIDE_ANIMATION_FINISHED', () => {
    const state: ReducerState = {
      renderList: [
        {
          componentName: 'test',
          data: { prop: 123 },
          options: { cancelable: true },
          visible: false,
        },
        {
          componentName: 'test',
          data: { prop: 432 },
          options: { cancelable: true },
          visible: true,
        },
      ],
    };
    const action = hideAnimationFinished();
    const newState = reducer(state, action);

    test('should remove first element from array after animation finished', () => {
      expect(newState.renderList).toEqual([
        {
          componentName: 'test',
          data: { prop: 432 },
          options: { cancelable: true },
          visible: true,
        },
      ]);
    });
  });

  describe('default', () => {
    const state: ReducerState = {
      renderList: [],
    };
    const action: any = { type: 'any_other_type' };
    const newState = reducer(state, action);

    test('should return the same state if unknown action passed', () => {
      expect(newState).toEqual(state);
    });
  });
});
