import React, {Component} from 'react';
import { View,  Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, ListItem, Divider, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { startApp} from '../../../App';

class SideDrawer extends Component {

    onOpenSettings = () => {
        this.props.navigator.showModal({
            screen: "devWallet.SettingsScreen",
            title: 'Settings'
        });

    }

    render() {
        return (
                <View style={[ 
                    styles.container,
                    { width: Dimensions.get("window").width *0.8 }
                ]}>
                    <View style={styles.title}>
                        <Text h4 style={{margin: 10}}>Mikhail Lazarev</Text>
                        <Avatar 
                            size="xlarge"
                            title="ML"
                            
                            rounded />
                    </View>

                    <Divider backgroundColor='#eee' />
                    <ListItem 
                        title="Settings"
                        leftIcon={{name: 'settings'}}
                        onPress={this.onOpenSettings}

                    />
                    <Divider backgroundColor='#eee' />
                    <ListItem 
                        title="Logout"
                        leftIcon={{name: 'exit-to-app'}}
                        onPress={startApp}
                    />
                 
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: "white",
        paddingTop: 50
    },
    title: {
        alignItems: 'center',
        marginBottom: 25,
    }
    
})

export default SideDrawer ;