import { combineReducers } from 'redux';
import shop, * as fromShop from './shop';
import devery, * as fromDevery from './devery';
import mythings, * as fromMyThings from './mythings';
import web3, * as fromWeb3 from './web3';

const rootReducer = combineReducers({
    devery,
    mythings,
    shop,
    web3
});

export const shopItems = state => fromShop.getShopItems(state.shop);
export const getWeb3 = state => fromWeb3.getWeb3(state.web3);
export const getWeb3Account = state => fromWeb3.getAccount(state.web3);
export const getMyThings = state => fromMyThings.getMyThings(state.mythings);

export default rootReducer;