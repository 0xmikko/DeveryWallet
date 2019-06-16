import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from "react-native";


const ItemCard = (props) => {
    console.log("PLACES", props)
    const imageObj = { uri: props.item.image }
    return <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.container} >
            <Image resizeMethod="auto" source={imageObj} style={styles.placeImage}/>
            <View style={styles.textLabel}>
                <Text>{props.item.brand}. {props.item.name} </Text>
                <Text style={styles.priceTag}>{props.item.price}</Text>
            </View>
        </View>
    </TouchableOpacity>
};


const styles = StyleSheet.create({
    container: {
        maxWidth: Dimensions.get('window').width /2,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 4,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    placeImage: {
        marginRight: 8,
        height: Dimensions.get('window').width /2,
        width: Dimensions.get('window').width /2,

    },
    textLabel: {
        width: '100%',
        alignContent: 'flex-start',
        alignItems: 'flex-start'

    },
    priceTag: {
        fontWeight: 'bold',
        fontSize: 16,
    }
    });

export default ItemCard;