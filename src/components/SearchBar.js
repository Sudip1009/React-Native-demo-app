import React from 'react'
import { Text, View, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term , onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
        <Feather name='search' style={styles.iconStyle}/>
        <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
         placeholder='Search'
         onEndEditing={onTermSubmit}
         />

     </View>
  )
}

const styles = StyleSheet.create({
    background:{
        marginTop: 15,
        backgroundColor:'#F0EEEE',
        height: 50,
        borderRadius:5,
        marginHorizontal: 15,
        flexDirection:'row',
        marginBottom: 10
    },
    inputStyle:{
        flex: 1,
        fontSize:18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar