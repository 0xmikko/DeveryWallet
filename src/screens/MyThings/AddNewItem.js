import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, Linking, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import DefaultInput from '../../components/UI/DefaultInput';
import QRCodeScanner from 'react-native-qrcode-scanner';
import * as actions from '../../store/actions';
import { getWeb3, getWeb3Account } from '../../store/reducers';


class AddNewItemScreen extends Component {

  state ={
    newItemAddress: '0x79567c57c27c2D85E9c28960374e073C636f38AA',
  }

  componentDidMount(){
    this.props.getWeb3();
  }

  onSuccess = (e) => {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  _registerNewItem = newItemAddress => {
  
    const { web3, account } = this.props;
    console.log(web3, account);
    this.props.registerNewThing(web3, newItemAddress, account);
  }
 
  handleChangeAddress = value => {
    this.setState({newItemAddress: value});
  }

  handleNewItemSubmit = () => {
    this._registerNewItem(this.state.newItemAddress);
  }

  render() {
    console.log("PProps", this.props);
    return (
        // <Text>Hello!</Text>
      <QRCodeScanner
        onRead={this.onSuccess}
        topContent={
          <View style={styles.container}>
            <Text>Scan QR-code or enter address manually.</Text>
            <DefaultInput 
                placeholder="Enter item address here" 
                onChangeText={this.handleChangeAddress}/>
            <Button title="Submit" onPress={this.handleNewItemSubmit}/>
          </View>
        }
        bottomContent={
          <View style={styles.container}>
            <Button title="Scan QR-Code" />
          </View>
        }
      />
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    width: "100%"
  },

});


const mapStateToProps = state => ({
  web3: getWeb3(state),
  account: getWeb3Account(state)
  });

const mapDispatchToProps = dispatch => ({
  getWeb3: () => dispatch(actions.getWeb3Instance()),
  registerNewThing: (web3, addressItem, account) => dispatch(actions.registerNewThing(web3, addressItem, account)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewItemScreen);