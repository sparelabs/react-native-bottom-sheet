import {
  KEYBOARD_BEHAVIOR,
  KEYBOARD_BLUR_BEHAVIOR,
  KEYBOARD_INPUT_MODE,
  SCREEN_HEIGHT,
} from '../../constants';

// default values
const DEFAULT_HANDLE_HEIGHT = 24;
const DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = 2.5;
const DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = true;
const DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = true;
const DEFAULT_ENABLE_OVER_DRAG = true;
const DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = false;
const DEFAULT_ANIMATE_ON_MOUNT = true;

// keyboard
const DEFAULT_KEYBOARD_BEHAVIOR = KEYBOARD_BEHAVIOR.interactive;
const DEFAULT_KEYBOARD_BLUR_BEHAVIOR = KEYBOARD_BLUR_BEHAVIOR.none;
const DEFAULT_KEYBOARD_INPUT_MODE = KEYBOARD_INPUT_MODE.adjustPan;

// initial values
const INITIAL_VALUE = Number.NEGATIVE_INFINITY;
const INITIAL_SNAP_POINT = -999;
const INITIAL_CONTAINER_HEIGHT = -999;
const INITIAL_CONTAINER_OFFSET = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};
const INITIAL_HANDLE_HEIGHT = -999;
const INITIAL_POSITION = SCREEN_HEIGHT;

// accessibility
const DEFAULT_ACCESSIBLE = true;
const DEFAULT_ACCESSIBILITY_LABEL = 'Bottom Sheet';
const DEFAULT_ACCESSIBILITY_ROLE = 'adjustable';
const DEFAULT_ENABLE_ACCESSIBILITY_CHANGE_ANNOUNCEMENT = true;
const DEFAULT_ACCESSIBILITY_POSITION_CHANGE_ANNOUNCEMENT = (
  positionInScreen: string
) => `Bottom sheet snapped to ${positionInScreen}% of the screen`;

export {
  DEFAULT_HANDLE_HEIGHT,
  DEFAULT_OVER_DRAG_RESISTANCE_FACTOR,
  DEFAULT_ENABLE_CONTENT_PANNING_GESTURE,
  DEFAULT_ENABLE_HANDLE_PANNING_GESTURE,
  DEFAULT_ENABLE_OVER_DRAG,
  DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE,
  DEFAULT_ANIMATE_ON_MOUNT,
  // keyboard
  DEFAULT_KEYBOARD_BEHAVIOR,
  DEFAULT_KEYBOARD_BLUR_BEHAVIOR,
  DEFAULT_KEYBOARD_INPUT_MODE,
  // layout
  INITIAL_POSITION,
  INITIAL_CONTAINER_HEIGHT,
  INITIAL_CONTAINER_OFFSET,
  INITIAL_HANDLE_HEIGHT,
  INITIAL_SNAP_POINT,
  INITIAL_VALUE,
  // accessibility
  DEFAULT_ACCESSIBLE,
  DEFAULT_ACCESSIBILITY_LABEL,
  DEFAULT_ACCESSIBILITY_ROLE,
  DEFAULT_ENABLE_ACCESSIBILITY_CHANGE_ANNOUNCEMENT,
  DEFAULT_ACCESSIBILITY_POSITION_CHANGE_ANNOUNCEMENT,
};
