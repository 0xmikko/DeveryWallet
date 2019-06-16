import React from 'react';
import { Text, StyleSheet } from 'react-native';


const H1 = props => (
   <Text 
   {...props}
   style={[styles.h1, props.style]} 
   />
);

const styles = StyleSheet.create({
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default H1;