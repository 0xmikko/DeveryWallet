import './global';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import WelcomeScreen from './src/screens/Auth/Welcome';
import ShopScreen from './src/screens/Shop/Shop';
import ProductDetailScreen from './src/screens/ProductDetail/ProductDetail';
import ProductHistoryScreen from './src/screens/ProductDetail/ProductHistory';
import MyThingsScreen from './src/screens/MyThings/MyThings';
import SettingsScreen from './src/screens/Settings/Settings';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import OnBoardingScreen from './src/screens/OnBoarding/OnBoarding';
import AddNewItemScreen from './src/screens/MyThings/AddNewItem';


const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "devWallet.WelcomeScreen", 
  () => WelcomeScreen, 
  store, 
  Provider);

Navigation.registerComponent(
  "devWallet.ShopScreen", 
  () => ShopScreen,
  store,
  Provider);

Navigation.registerComponent(
  "devWallet.MyThingsScreen",
  () => MyThingsScreen,
  store,
  Provider);
  
Navigation.registerComponent(
  "devWallet.ProductDetailScreen",
  () => ProductDetailScreen,
  store,
  Provider);

Navigation.registerComponent(
  "devWallet.ProductHistoryScreen",
  () => ProductHistoryScreen,
  store,
  Provider);  


  Navigation.registerComponent(
    "devWallet.ScanScreen",
    () => AddNewItemScreen,
    store,
    Provider);  
  

Navigation.registerComponent(
  "devWallet.SettingsScreen",
  () => SettingsScreen,
  store,
  Provider);
  
Navigation.registerComponent(
    "devWallet.SideDrawer",
    () => SideDrawer,
    store,
    Provider);

Navigation.registerComponent(
    "devWallet.OnboardingScreen",
    () => OnBoardingScreen,
    store,
    Provider);

// Start a App
export const startApp = () => Navigation.startSingleScreenApp({
  screen: {
    screen: "devWallet.WelcomeScreen",
    navigatorStyle: {navBarHidden: true },
    
  },
 
  passProps: {},
  animationType: 'slide-down'
})

startApp();