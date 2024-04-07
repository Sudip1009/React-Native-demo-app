import React from 'react'
import {Text , View, StyleSheet, Image} from 'react-native'

const Card = ({item}) => {
  return (
    <View style={styles.container}>
    <Image style={styles.dataImage} source={{uri: item.image}}/>
    <View style={styles.cardDetails}>
    <Text>{item.name}</Text>
    <Text style={styles.price}>{item.price}</Text>
    </View>
    </View>
  )
}
 const styles = StyleSheet.create({
    dataImage:{
        width:250,
        height:120,
        borderRadius: 4
      },
      container:{
        marginLeft: 15,
        marginBottom: 5
      },
      cardDetails:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
      },
      price:{
        backgroundColor: '#DC582A',
        color: 'white',
        padding: 5,
        borderRadius: 20
      }
 })
export default Card