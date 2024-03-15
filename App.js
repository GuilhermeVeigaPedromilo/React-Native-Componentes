import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import ExemploTxtComChildren from "./src/pages/ExemploTxtComChildren";
import ExemploTouchableOpacityChildren from './src/pages/ExemploTouchableOpacityChildren';
import Exemplos from "./src/pages/Exemplos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Exemplos"
          component={Exemplos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ExemploTxtComChildren"
          component={ExemploTxtComChildren}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ExemploTouchableOpacityChildren"
          component={ExemploTouchableOpacityChildren}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
