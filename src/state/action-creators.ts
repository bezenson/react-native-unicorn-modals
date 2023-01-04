import type { ComponentName, ShowRenderItemOptions } from '../types';
import { HIDE_ANIMATION_FINISHED, HIDE_ANIMATION_START, SHOW_MODAL } from './action-types';

/**
 * Show component with passed data
 * @param componentName Registered component name
 * @param data Props to pass into component
 */
export const showModal = (componentName: ComponentName, data: unknown, options?: ShowRenderItemOptions) => {
  return {
    type: SHOW_MODAL,
    payload: {
      componentName,
      data,
      options,
    },
  };
};

/**
 * Current visible component will start to hide.
 */
export const hideAnimationStart = () => {
  return { type: HIDE_ANIMATION_START };
};

/**
 * Should be dispatched when visible component's hide animation has finished.
 */
export const hideAnimationFinished = () => {
  return { type: HIDE_ANIMATION_FINISHED };
};
