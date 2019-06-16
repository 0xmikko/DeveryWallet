import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../../utils/updateState';

const initailState = {
    mythings: null
}

export default (state=initailState, action) => {
  console.log("ACZ - RECEIVED", action);
  switch(action.type) {
    default:
      return state;

    case actionTypes.WEB3_GET_INSTANCE:
      return updateState(state, {
        web3: action.web3,
        account: action.account
      })
          
  }

 };

export const getMyThings = state => state.mythings;
