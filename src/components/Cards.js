import React from "react";
import { StyleSheet,View,Text,FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "./Card";

const Cards =({ title, results })=>{
  const navigation = useNavigation()
    return (
        <>
             <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({item}) =>{
                return (
                  <TouchableOpacity onPress={()=> navigation.navigate("Card Details" , { id: item.id , item: item})}>
                <Card item={item}/>
                </TouchableOpacity>
                )
            }}
            />

        </>
    )
}

const styles = StyleSheet.create({
  title:{
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 5
  }
})

export default Cards