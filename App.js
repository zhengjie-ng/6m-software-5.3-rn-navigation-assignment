import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigators from "./navigators/TabsNavigators";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LandingScreen from "./screens/LandingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <NavigationContainer style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TabsNavigators"
              component={TabsNavigators}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
