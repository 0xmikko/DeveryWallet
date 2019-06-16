import React from "react";
import { View, Text, StyleSheet } from "react-native";



const ViewWithTitle = ({title, children, style}) => (

    <View style={[styles.infoblock, style]}>
        <Text style={styles.title}>{title}</Text>
        {children}
    </View>

    );
    

const styles = StyleSheet.create({
    
    infoblock: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        backgroundColor: 'white'
    },
   
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 6
    }
    });

export default ViewWithTitle;