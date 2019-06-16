import React, { Component } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


class SearchBarComponent extends Component {

  state = {
      search: ""
  }

  onSearchBarTextChange = value => {

    this.setState({
        search: value
    })
    if (this.props.onChangeText) this.props.onChangeText(value);
  }

  render() {
    return <SearchBar
    placeholder="Type here..."
    value={this.state.search}
    onChangeText={this.onSearchBarTextChange} 
    containerStyle={{ width: '100%', backgroundColor: "white", borderTopWidth: 0, borderBottomWidth: 0, }}
    inputContainerStyle={{ backgroundColor: 'white'}}
      />
  }

}

export default SearchBarComponent;