// import 'react-native-gesture-handler';
import { createStackNavigator  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './src/screens/SearchScreen';
import CardDetails from './src/components/CardDetails';

// const navigator = createStackNavigator({
//   Search: SearchScreen
// },{
//   initialRouteName:'Search',
//   defaultNavigationOptions:{
//     title:'App'
//   }
// })
// export default createAppContainer(navigator)

const Stack = createStackNavigator ();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}>
        <Stack.Screen name="App" component={SearchScreen} />
        <Stack.Screen name="Card Details" component={CardDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
