import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import ItemDetail from '../../components/Products/Detail';

import * as actions from '../../store/actions/shop';
import { shopItems } from '../../store/reducers';

class ItemDetailScreen extends Component {

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
    console.log("ACZ: Item Detail COMPONENT MOUNT")
    this.props.getShopItems();
  }

  
    
  render(){

    console.log("PROPS", this.props);
    
    return (
      <View>
        <ItemDetail 
          item={this.props.item}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailScreen);