import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'

/**
 * Define Action constants to listen to
 * Format should be '[Event source] EventType' as string
 */
export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'

/**
 * Construct and export Action classes to be able to use them.
 * Assign payloads if the action needs any payload.
 */


/**
 * AddTutorial to add new tutorial to the store
 * Notice:- Payload type is of Tutorial type
 */
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL

  constructor(public payload: Tutorial) { }
}


/**
 * RemoveTutorial to add remove tutorial from the store
 * Notice:- Payload type is of number type as we need to remove the tutoral
 * from a specefic location of store.
 */
export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL

  constructor(public payload: number) { }
}

/**
 * Now export all our actions to a single variable to use in reducer
 */

export type Actions = AddTutorial | RemoveTutorial
