import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import ItemList from '../../components/Products/List';
import * as actions from '../../store/actions';
import { getWeb3, getMyThings, getWeb3Account } from '../../store/reducers';


class MyThingsScreen extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
} 

  onNavigatorEvent = event => {
      if (event.type === 'NavBarButtonPress') {
          if (event.id === 'SideDrawerToggle') {
              this.props.navigator.toggleDrawer({
                  side: 'left'
              })
          }

          if (event.id === 'BuyButton') {
            this.props.navigator.push({
              screen: "devWallet.ScanScreen",
              title: "Add new Thing"
          });
        }
      }
      console.log(event);
  }

  itemSelectedHandler = key => {

    const selectedPlace = this.props.places.find(place => place.key === key);
    this.props.navigator.push({
      screen: "devWallet.ScanScreen",
      title: selectedPlace.name,
      passProps: {
        selectedPlace: selectedPlace
      }
    });
  }

  componentDidMount() {
    this.props.getWeb3();
    // this.props.getWeb3Account();
  }
    
  render(){

    const { web3, mythings } = this.props;
    let content = <Text>Loading</Text>;

    if ((web3) && (!mythings)) {
        this.props.getMyThings(web3, this.props.account);
       
    }

    if ((web3) && (mythings)) {
      content = <View>
                  <ItemList 
                    places={this.props.places}
                    onItemSelected={this.itemSelectedHandler}
                  />
      </View>
      }
    
    
    return content;
  }
}

const mapStateToProps = state => ({
  web3: getWeb3(state),
  account: getWeb3Account(state),
  mythings: getMyThings(state)
    // places: state.places.places,
  });

const mapDispatchToProps = dispatch => ({
  getWeb3: () => dispatch(actions.getWeb3Instance()),
  getMyThings: (web3, account) => dispatch(actions.getMyThings(web3, account))
}

);

export default connect(mapStateToProps, mapDispatchToProps)(MyThingsScreen);