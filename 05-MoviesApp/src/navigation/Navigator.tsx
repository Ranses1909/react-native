import { createStackNavigator } from '@react-navigation/stack';
import { Movies } from '../interfaces/movieDBInterface';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movies;
}

const Stack = createStackNavigator<RootStackParams>();

function Navigator() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle:{ 
            // backgroundColor:'black'
        }
    }}
    >
      <Stack.Screen name="HomeScreen"  options={{}} component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    
    </Stack.Navigator>
  );
}
export default Navigator;

 