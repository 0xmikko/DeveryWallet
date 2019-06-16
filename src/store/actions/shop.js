import * as actionTypes from './actionTypes';


export const getShopItems = () => {
    
    console.log("@@ACZ", actionTypes.SHOP_GET_ITEMS_SUCCESS)
    return dispatch => {
            dispatch({
            type: actionTypes.SHOP_GET_ITEMS_SUCCESS,
            payload: [
                {
                    id: 1,
                    brand: 'GUCCI',
                    name: 'Leather choker with cross pendant',
                    image: 'https://cdn-images.farfetch-contents.com/13/12/91/70/13129170_14095428_1000.jpg',
                    description: 'Set in the historic necropolis of Alyscamps in Arles, the Cruise 2019 show was imbued with references to punk, rock and gothic fashion. Models playing rock stars were intertwined with widows concealed under black veils, carrying bouquets of wilted blooms and cross pendant necklaces in hand. The leather strap choker is completed with a lion head from which hangs a cross pendant. Each cross is embellished with black enamel that is applied to each individual cell using the elaborate plique-a-jour technique, a vitreous enameling process that dates back to the Byzantine Empire in 6th century AD and has been brought to jewelry by Art Nouveau artists.',
                    price: '$1500'
                },
                {
                    id: 2,
                    brand: 'WineYard',
                    name: 'Prosecco',
                    image: 'https://cdn.nexternal.com/saw/images/rosso1.png',
                    description: 'Good Gucchhii',
                    price: '$1500'
                },
            ]
        })}

        // const productArray = [
        //     '0xB82710912a79D362F5F39eEA66e928E77655c445',
        //     '0xFaD14f277D097129de20B0CdBe7c10eC9f40BD54'
        // ]
        // return async(dispatch) => {
        //     let productData = [];
        //     for(let i=0; i<productArray.lenght(); i++) {
        //         deveryRegistryClient.getProduct(productArray[i])
        //             .then(data => productData.push(data))
        //     }
    
        //     dispatch({
        //         type: actionTypes.SHOP_GET_ITEMS_SUCCESS,
        //         payload: productData
        //     })
    
        // }
}