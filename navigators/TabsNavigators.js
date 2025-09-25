import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import { Colors } from "../styles/colors";

const Tab = createBottomTabNavigator();

function TabsNavigators({ route }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.PRIMARY },

        tabBarActiveTintColor: Colors.PRIMARY,
        headerTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={route?.params}
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={route?.params}
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigators;
