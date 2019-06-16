import * as actionTypes from './actionTypes';
import contract from 'truffle-contract';
import Web3 from 'web3';
// import OwnershipContractArtifact from '../../../contracts/Onwership.sol';
import OwnershipContractArtifact from '../../../build/contracts/Ownership.json';



export const getMyThings = (web3, account) => {
    console.log("GET_MY_THINGS", web3, account)

    return async(dispatch, getState) => {

        const web3 = new Web3(
            new Web3.providers.HttpProvider('http://localhost:8545/')
            // new Web3.providers.HttpProvider('https://mainnet.infura.io/')
          );
        const account2 = web3.eth.accounts.create();

        const abi = OwnershipContractArtifact.abi;
        const unlinked_binary = OwnershipContractArtifact.unlinked_binary;
        const OwnershipContract = contract(OwnershipContractArtifact);
        // addr = await OwnershipContract.deployed();

        // const provider = new Web3.provider('http://localhost:8545');

        // const address = '0x21dD57351EA81a8070a2802f5cC3C447332b5516'; Mainnet
        const address = '0x01a590bBb52F9b98592308B903B6D64A85B99857';
        const instance = web3.eth.Contract(abi, address);

        console.log("HASH", await instance.methods.addressHash('0xA6aA18aE16E000787063A404a44Da3A2AC26aa1c')
                                            .call({from: account2.address}));

        const itemEvents = await instance.getPastEvents('ItemOwner', {filter: {owner: '0xA6aA18aE16E000787063A404a44Da3A2AC26aa1c'}})
        console.log("C_EVENTS", itemEvents);
        // const provider = web3.currentProvider;
        // console.log(provider);
        // OwnershipContract.setProvider(provider);
        // console.log("CONTRACT-SEND")

        // try{
        // const contractInstance = await OwnershipContract.at();
        // }
        // catch(err){
        //     console.log(err)
        // }
        // console.log("CONTRACT", contractInstance);

        // const instance = await OwnershipContract.deployed();
        // const events = await instance.getPastEvents("ItemOwner", {filter: {owner: account}});
        dispatch({
            type: actionTypes.MY_THINGS_GET,
            payload: abi
        });

    }
}

export const registerNewThing = (web3, addressItem, account) => {
    console.log("REGISTER_NEW_THING!", web3, addressItem, account)
    return async(dispatch, getState) => {
        const abi = OwnershipContractArtifact.abi;

    
        // const address = '0x21dD57351EA81a8070a2802f5cC3C447332b5516'; Mainnet
        const address = '0x01a590bBb52F9b98592308B903B6D64A85B99857';
        const instance = web3.eth.Contract(abi, address);
        await web3.eth.accounts.wallet.add(account);
        accounts = await web3.eth.getAccounts();
        console.log("ASS", accounts, account.address);
        const transaction = await instance.methods.registerItem(account.address).send({from: account.address})
        console.log("REGISTER", transaction);

        console.log("DONE!");

        // console.log("QQ", await instance.methods.addressHash(address)
        //     .call({from: web3.eth.accounts[0]}));
        // dispatch(getMyThings(web3, account));

    }
}