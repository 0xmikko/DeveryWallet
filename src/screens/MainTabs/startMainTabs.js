import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("ios-cart", 30),
        Icon.getImageSource("ios-wallet", 30),
        Icon.getImageSource("ios-menu", 30),
        Icon.getImageSource("ios-add", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "devWallet.ShopScreen",
                    label: "Shop",
                    title: "Shop",
                    icon: sources[0],
                    navigatorButtons:{
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: 'SideDrawerToggle'
                            }
                        ]
                    }
                },
                {
                    screen: "devWallet.MyThingsScreen",
                    label: "My Things",
                    title: "My Things",
                    icon: sources[1],
                    navigatorButtons:{
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: 'SideDrawerToggle'
                            }
                        ],
                        rightButtons: [
                            {
                                icon: sources[3],
                                title: 'Buy',
                                id: 'BuyButton'
                            }
                        ]
                    },
                }
            ],
            drawer: {
                left: {
                    screen: "devWallet.SideDrawer"
                }

            }
        });
    })    
}

export default startTabs;