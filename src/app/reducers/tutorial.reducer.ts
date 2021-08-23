import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

/**
 * Let's define one initial state to avoid any initializing issues.
 */
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://udemy.com'
}

/**
 * Reducer  is a pure function to process our invoked actions on store data immutablly
 * It Takes the state and action as arguments to work properly.
 * @param state : Tutorial[]
 * @param action : TutorialActions.Actions
 * @returns Updated state
 */
export function _reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
  console.log(state, action);
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      state = [...state];
      state.splice(action.payload, 1)
      return state;
    default:
      return state;
  }
}

/**
 * Work around to prevent type mismatch while registering the reducer in app module
 * @param state : any
 * @param action : any
 * @returns
 */
export function reducer(state: any, action: any) {
  return _reducer(state, action);
}
