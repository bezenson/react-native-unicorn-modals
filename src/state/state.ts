import type { ActionsType, ReducerState, RenderItemOptions } from '../types';
import { HIDE_ANIMATION_FINISHED, HIDE_ANIMATION_START, SHOW_MODAL } from './action-types';

export const initialState: ReducerState = {
  renderList: [],
};

export function mergeOptionsWithDefault(options = {}): RenderItemOptions {
  return {
    cancelable: true,
    ...options,
  };
}

export function reducer(state: ReducerState, action: ActionsType): ReducerState {
  switch (action.type) {
    case SHOW_MODAL: {
      return {
        ...state,
        renderList: [
          ...state.renderList,
          {
            componentName: action.payload.componentName,
            data: action.payload.data,
            options: mergeOptionsWithDefault(action.payload.options),
            visible: true,
          },
        ],
      };
    }

    case HIDE_ANIMATION_START: {
      return {
        ...state,
        renderList: state.renderList.map((item, index) => {
          if (index === 0) {
            return { ...item, visible: false };
          }
          return item;
        }),
      };
    }

    case HIDE_ANIMATION_FINISHED: {
      return {
        ...state,
        renderList: state.renderList.filter((_item, index) => index !== 0),
      };
    }

    default: {
      return state;
    }
  }
}
