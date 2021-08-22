import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
}

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

export function reducer(state: any, action: any) {
  return _reducer(state, action);
}
