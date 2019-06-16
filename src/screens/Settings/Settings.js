import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import DefaultInput from '../../components/UI/DefaultInput';
import * as actions from '../../store/actions';
import { getWeb3, getWeb3Account } from  '../../store/reducers';


class SettingsScreen extends Component {
  
  state = {
    privateKey: ''
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
} 
  handleInputPrivateKey = value => {
    this.setState({privateKey: value})
    
  }
    
  handleImportSubmit = () => {
    console.log("Hi2")
    console.log(this.state.privateKey);
    this.props.updateAccountWithPrivateKey(this.state.privateKey);
  }

  render(){
  
    const ethAddress = (this.props.account) ? this.props.account.address : "Loading";
    return (
      <View style={styles.container}>
        <Text h3 style={styles.header3}>Settings</Text>
        <Text>Your public address: {ethAddress}</Text>
        <Text>Amount: - </Text>
        <Text h4 style={styles.header4}>Import Private Key</Text>
        <DefaultInput style={styles.input} onChangeText={this.handleInputPrivateKey}></DefaultInput>
        <Button title="Import" onPress={this.handleImportSubmit}/>
        <Button title="Close" type="outline" onPress={() => Navigation.dismissModal(this.props.componentId)}/>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header3: {
    marginBottom: 20
  },
  header4: {
    marginTop: 15,
    marginBottom: 7
  },
  input: {
    height: 200
  }
});

const mapStateToProps = state => ({
    account: getWeb3Account(state),
    web3: getWeb3(state)
  });


const mapDispatchToProps = dispatch => ({
  getWeb3: () => dispatch(actions.getWeb3Instance),
  updateAccountWithPrivateKey: newPrivateKey => dispatch(actions.updateAccountWithPrivateKey(newPrivateKey))
  

});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);