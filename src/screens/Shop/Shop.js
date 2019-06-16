import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import ItemList from '../../components/Products/List';
import SearchBar from '../../components/UI/SearchBar';
import * as actions from '../../store/actions/shop';
import { shopItems } from '../../store/reducers';

class ShopScreen extends Component {

  state = {
    search: ''
  }

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
      }
      console.log(event);
  }

  componentDidMount() {
    console.log("ACZ: SHOP COMPONENT MOUNT")
    this.props.getShopItems();
  }

  itemSelectedHandler = key => {

    const selectedItem = this.props.items.find(item => item.id === key);
    console.log('MITEM2', selectedItem);
    this.props.navigator.push({
      screen: "devWallet.ProductDetailScreen",
      title: selectedItem.name,
      passProps: {
        item: selectedItem
      }
    });
  }

  onSearchBarUpdated = search => {
    this.setState({
      search
    });
  }

    
  render(){

    console.log("PROPS", this.props);
    let { items } = this.props;

    const contains = (str, needle) => {
      return str.toLowerCase().search(needle.toLowerCase()) != -1
    }

    const searchString = this.state.search

    if (this.state.search !== '') {
      items = this.props.items.filter(item => {
        return contains(item.brand, searchString) ||
               contains(item.name, searchString) 
      })
    } 
    
    return (
      <View>
        <SearchBar onChangeText={this.onSearchBarUpdated} />
        
        <ItemList 
          items={items}
          onItemSelected={this.itemSelectedHandler}
        />

      </View>
    );
  }
}

const mapStateToProps = state => ({
    items: shopItems(state),
  });


const mapDispatchToProps = dispatch => ({
    getShopItems: () => dispatch(actions.getShopItems())
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen);