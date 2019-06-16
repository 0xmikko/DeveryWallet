import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "./Card";


const ItemList = ({items, onItemSelected}) => {      
  
    return (
        <FlatList 
            style={styles.container}
            data={ items }
            numColumns = {2}
            renderItem={(info) => (
              <ListItem 
                key={info.item.id} 
                item={info.item}
                onItemPressed={() => onItemSelected(info.item.id)} />
            )}
        />
    );
};



const styles = StyleSheet.create({
   
    container: {
      width: "100%",
      padding: 10,
    }
  });
  

export default ItemList;