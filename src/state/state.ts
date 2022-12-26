import type { RenderItemOptions, ActionsType, ReducerState } from '../types';
import { HIDE_ANIMATION_FINISHED, SHOW_COMPONENT, START_HIDE_ANIMATION } from './action-types';

export const initialState: ReducerState = {
  renderList: [],
};

function mergeOptionsWithDefault(options = {}): RenderItemOptions {
  return {
    cancelable: true,
    ...options,
  };
}

export function reducer(state: ReducerState, action: ActionsType): ReducerState {
  switch (action.type) {
    case SHOW_COMPONENT: {
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

    case START_HIDE_ANIMATION: {
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
