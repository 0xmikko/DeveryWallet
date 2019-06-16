import * as actionTypes from './actionTypes'
import { DeveryRegistry } from '@devery/devery';


export const getDeveryProductList = productArray => {

    const productArray = [
        '0xB82710912a79D362F5F39eEA66e928E77655c445',
        '0xFaD14f277D097129de20B0CdBe7c10eC9f40BD54'
    ]
    return async(dispatch) => {
        let productData = [];
        for(let i=0; i<productArray.lenght(); i++) {
            deveryRegistryClient.getProduct(productArray[i])
                .then(data => productData.push(data))
        }

        dispatch({
            type: actionTypes.SHOP_GET_ITEMS_SUCCESS,
            payload: productData
        })

    }
}