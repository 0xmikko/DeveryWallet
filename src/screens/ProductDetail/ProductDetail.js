import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import ItemDetail from '../../components/Products/Detail';

import * as actions from '../../store/actions/shop';
import { shopItems } from '../../store/reducers';
import { Divider } from 'react-native-elements';


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


  onOpenHistory = () => {
    
    this.props.navigator.push({
      screen: "devWallet.ProductHistoryScreen",
      title: 'Product History',
      passProps: {
        item: this.props.item
      }
    });
  }
    
  render(){

    console.log("PROPS", this.props);
    
    return (
      <ScrollView style={styles.bacground}>
        <ItemDetail 
          item={this.props.item}/>
        <View style={styles.container}>
          <ListItem
            title="History"
            onPress={this.onOpenHistory}
            chevron
            />
          <Divider style={{ backgroundColor: '#eee' }} />
            
          <ListItem
            title="Owner Info"
            chevron
            />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  bacground: {
    backgroundColor: '#eeee'
  }
});

export default ItemDetailScreen;