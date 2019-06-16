import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Button } from 'react-native-elements';
import ReadMore from 'react-native-read-more-text';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewWithTitle from '../UI/ViewWithTitle';

const ItemDetail = ({item}) => {

    const imageObj = { uri: item.image }
    return (
        <View style={styles.listItem} >
            <Image resizeMethod="auto" source={imageObj} style={styles.placeImage}/>
            <View style={[styles.infoblock, {paddingBottom: 10,}]}>
                <View style={styles.saleBlock}>
                    <Text style={styles.priceTag}>$1500</Text>
                    <Button 
                            icon={
                                <Icon
                                  name="ios-cart"
                                  size={20}
                                  color="white"
                                />
                              }
                            
                            />
                </View>
                <ReadMore
                    numberOfLines={4}
                >
                    <Text>{item.description}</Text>
                </ReadMore>
            </View>
            <ViewWithTitle title="Info" style={{marginTop: 10}}>
                <Text>Brand: {item.brand}</Text>
                <Text>Product: {item.name}</Text>
                <Text>Created at: 15th June of 2019</Text>
                <Text>Type: used</Text>
                <Text>Owners: 2</Text>                
            </ViewWithTitle>

            <ViewWithTitle title="Seller" style={{marginTop: 10}}>
                <Text>Name: Oliver Huis</Text>
                <Text>Phone: +1 800 233-33-33</Text>            
                <Text>Location: New York</Text>            
            </ViewWithTitle>

        </View>
    );
    
};


const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        alignItems: "center",
        backgroundColor: "#eee"

        
    },
    placeImage: {
        marginRight: 8,
        height: 300,
        width: "100%"

    },

    saleBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignContent: 'center'
    },

    infoblock: {
        width: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        backgroundColor: 'white'
    },
    priceTag: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 6
    }
    });

export default ItemDetail;