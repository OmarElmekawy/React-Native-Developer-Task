import { createStackNavigator } from "@react-navigation/stack";
import EventList from "./screens/EventList";
import EventDetails from "./screens/EventDetails";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalColors } from "./constants/colors";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Button from "./UI/button";
import { loginAction } from "./store/loginSlice";
import { useWindowDimensions } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: GlobalColors.primary300 },
        headerStyle: { backgroundColor: GlobalColors.primary300 },
        headerTintColor: "white",
        tabBarActiveTintColor: "yellow",
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 300,
        },
        headerRight: () => {
          return (
            <Button
              mode="flat"
              buttonText="Logout"
              onPress={() => {
                dispatch(loginAction(null));
              }}
            />
          );
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="enter-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventList}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function AuthenticatedNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "Back",
        cardStyle: { backgroundColor: GlobalColors.primary200 },
        headerStyle: { backgroundColor: GlobalColors.primary300 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="tabBotom"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="EventDetails" component={EventDetails} />
    </Stack.Navigator>
  );
}

function NotAuthenticated() {
  const { width, height } = useWindowDimensions();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalColors.primary300,
          height: height < 460 ? 60 : 100,
        },
        cardStyle: { backgroundColor: GlobalColors.primary200 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function RootNavigation() {
  const loginState = useSelector((state) => state.loginRed.loginedIn);

  return (
    <NavigationContainer>
      {!loginState && <NotAuthenticated />}
      {loginState && <AuthenticatedNavigation />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
