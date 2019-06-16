import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../../utils/updateState';

const initailState = {
    web3: null
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

export const getWeb3 = state => state.web3;
export const getAccount = state => state.account;