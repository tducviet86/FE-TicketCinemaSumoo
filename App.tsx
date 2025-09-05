import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./src/components/tab-bar/tab-bar.component";
import HomePage from "./src/screens/Home/HomePage.component";
// import TicketPage from "./src/screens/Ticket/ticket.component";
import { NavigationContainer } from "@react-navigation/native";
import TheaterSystemUI from "./src/screens/Ticket/ticket.component";
import BoxOfficeScreen from "./src/screens/BoxOfficeScreen/BoxOfficeScreen.component";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeStack} />
      <Stack.Screen name="Ticket" component={TicketStack} />
    </Stack.Navigator>
  </NavigationContainer>
);

const TicketStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="TicketMain"
  >
    <Stack.Screen name="TicketMain" component={TheaterSystemUI} />
    <Stack.Screen name="BoxOffice" component={BoxOfficeScreen} />
  </Stack.Navigator>
);
const HomeStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="home"
        component={HomePage}
        options={{ tabBarLabel: "Trang chủ", icon: "home-outline" } as any}
      />
      <BottomTab.Screen
        name="TicketStack"
        component={TicketStack}
        options={{ tabBarLabel: "Cụm rạp", icon: "ticket-outline" } as any}
      />
      <BottomTab.Screen
        name="profile"
        component={TheaterSystemUI}
        options={{ tabBarLabel: "Tôi", icon: "person-outline" } as any}
      />
    </BottomTab.Navigator>
  );
};
export default App;
