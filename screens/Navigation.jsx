import { HomeScreen } from './Home.jsx';
import { FullProductScreen } from './FullProduct.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Products" }} />
        <Stack.Screen name="FullProduct" component={FullProductScreen} options={{ title: "Product" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};