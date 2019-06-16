import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../../utils/updateState';

const initailState = {
    items: [],
}

export default (state=initailState, action) => {
  console.log("ACZ - RECEIVED", action);
  switch(action.type) {
    default:
      return state;

    case actionTypes.SHOP_GET_ITEMS_SUCCESS:
      return updateState(state, {
        items: action.payload
      })
          
  }

 };

export const getShopItems = state => state.items;