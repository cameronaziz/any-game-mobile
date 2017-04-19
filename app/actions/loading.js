import * as types from './types'


export function setLoading( { currentlyLoading } ) {
  return {
    type: types.CURRENTLY_LOADING,
    currentlyLoading
  }
}