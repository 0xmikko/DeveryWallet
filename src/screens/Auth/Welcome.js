import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Image,
        AsyncStorage,
      Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

import startMainTabs from '../MainTabs/startMainTabs'
import appIcon from '../../assets/icon.png';
import Web3 from 'web3';
import { DeveryRegistry } from '@devery/devery';

export default class App extends Component {

  loginHandler = () => {
    startMainTabs();
  }

  onBoardingHandler = () => {
    this.props.navigator.resetTo({
      screen: "devWallet.OnboardingScreen",
      navigatorStyle: {navBarHidden: true },
    });
  }

  componentWillMount = async() => {

    console.log("Waiting for Web3");

    
    // let deveryRegistryClient = new DeveryRegistry();
    
    // let app = await deveryRegistryClient.getApp('0xA6aA18aE16E000787063A404a44Da3A2AC26aa1c')
    // if(app.active){
    //     console.log(app.appName);
    //     //... other stuff
    // } else {
    //   console.log("App inactive")
    // }
  }

  render() {
    return (
        

        <View style={styles.container}>
          <View style={styles.iconBlock}>
            <Image source={appIcon} style={styles.appIcon}/>
            <Text style={styles.welcome}>Devery Market</Text>
            <Text style={styles.welcomeH2}>Genuine shop for proved things!</Text>
          </View>
          <View style={styles.buttonBlock}>
          <Button 
              title="Login" 
              onPress={this.loginHandler} 
              containerStyle={styles.button}
              />

          <Button 
              title="Product tour" 
              onPress={this.onBoardingHandler} 
              containerStyle={styles.button}
              type="outline"
              />
          </View>
        </View>
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  welcome: {
    fontSize: 34,
    fontWeight: 'normal',
    textAlign: 'center',

  },

  welcomeH2: {
    marginTop: 120,
    fontSize: 24,
    textAlign: 'center',
  },

  appIcon: {
    width: 90,
    height: 90,
  },

  iconBlock: {
    flex: 0.8,
    flexDirection: 'column',
    width: "100%",
    height: 500,
    paddingTop: "50%",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  buttonBlock: {
    flex: 0.2,
    flexDirection: 'column',
    width: "100%",
    height: 300,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: "8%",

  },

  button: {
    marginTop: 10,
    width: "90%",
  }

});
