/* eslint-disable linebreak-style */


/**
 * ACTIONS TYPES
 */

export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/load-request',
  LOAD_SUCCESS = '@repositories/load-success',
  LOAD_FAILURE = '@repositories/load-failure'
}

/**
 * DATA TYPES
 * */

export interface Repository {
   id: number
   name: string
 }

/**
  * STATE TYPE
  */
export interface RepositoriesState {
   readonly data: Repository[],
   readonly loading: boolean,
   readonly error: boolean
 }
