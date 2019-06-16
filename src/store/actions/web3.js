import * as actionTypes from './actionTypes';
import { AsyncStorage } from 'react-native';
import Web3 from 'web3';

export const getWeb3Instance = () => {
    console.log("ACTION: GETWEB3")
    return async(dispatch) => {
        const web3 = new Web3(
            new Web3.providers.HttpProvider('http://localhost:8545/')
            // new Web3.providers.HttpProvider('https://mainnet.infura.io/')
          );
        
          // Get accounts from local storage
          
          let acc = await AsyncStorage.getItem("EncryptedAccount");
          console.log("ENC_ACCOUNT", acc);
          
          let activeAccount;
          if (!acc) {
            activeAccount = web3.eth.accounts.create();
            console.log("NEW ACCOUNT WAS CREATED!")
            const encryptedAcc = await web3.eth.accounts.encrypt(activeAccount.privateKey, 'test!');
            await AsyncStorage.setItem("EncryptedAccount", JSON.stringify(encryptedAcc));
          } else {
            activeAccount = await web3.eth.accounts.decrypt(JSON.parse(acc), 'test!');
          }
          console.log(activeAccount.sign("wedopkwpoedkweopk"));
          dispatch({
              type: actionTypes.WEB3_GET_INSTANCE,
              web3: web3,
              account: activeAccount
          })
      

    }
}

export const updateAccountWithPrivateKey = newPrivateKey => {
  return async(dispatch) => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider('http://localhost:8545/')
      // new Web3.providers.HttpProvider('https://mainnet.infura.io/')
    );
  
    console.log(`Try to set new private key: ${newPrivateKey}`);
    const newAcc = web3.eth.accounts.privateKeyToAccount(newPrivateKey);
    console.log("NEW ACC", newAcc);
    const encryptedAcc = await web3.eth.accounts.encrypt(newAcc.privateKey, 'test!');
    console.log("ENC-ACC", encryptedAcc)
    await AsyncStorage.setItem("EncryptedAccount", JSON.stringify(encryptedAcc));
    dispatch(getWeb3Instance());
  }
}