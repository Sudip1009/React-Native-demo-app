import {React, useState} from 'react'
import { Text, View, StyleSheet, Image, FlatList, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import { data } from '../data/Data'
import Cards from '../components/Cards'

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('')

    const searchMenu = ()=>{
        data.filter((value)=>{
            if(term == ""){
              return value;
            }else if(value.name.toLowerCase().includes(term.toLowerCase())){
              return value;
            }
          })
    }

    const filterType =(category)=>{
      return data.filter((result)=>{
        return result.category === category;
      })
  }

  return (
    <>
        <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={()=>searchMenu()}/>

          {/* {data
          .filter((value)=>{
            if(term == ""){
              return value;
            }else if(value.name.toLowerCase().includes(term.toLowerCase())){
              return value;
            }
          })
          .map((values)=>{
            return (
              <View>
              
              </View>
            )
          })
          } */}
     <ScrollView>
      <Cards navigation={navigation} results={filterType('burger')} title='Burger'/>
      <Cards navigation={navigation} results={filterType('pizza')} title='Pizza'/>
      <Cards navigation={navigation} results={filterType('salad')} title='Salad'/>
      <Cards navigation={navigation} results={filterType('chicken')} title='Chicken'/>
      </ScrollView>
     </>
    
  )
}

const styles = StyleSheet.create({})

export default SearchScreen