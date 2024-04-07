import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, Button ,ScrollView} from "react-native";
import { data } from "../data/Data";
import CardReview from "./CardReview";

const CardDetails = ({ route }) => {
    // console.log(route)
    const items = route.params.item

    return (
        <ScrollView>    
            <Text>Order Details</Text>
            <Image style={styles.dataImage} source={{ uri: items.image }} />
            <CardReview/>
            <Button title="Order now"/>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    dataImage: {
        width: '100%',
        height: 200,
        borderRadius: 4
    }
});


export default CardDetails