import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View } from "react-native";

import { Provider, useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, RootState } from "./src/store/store";

import { SafeAreaProvider } from "react-native-safe-area-context";

import HomePage from "./src/screens/Home/HomePage.component";
import TheaterSystemUI from "./src/screens/Ticket/ticket.component";
import BoxOfficeScreen from "./src/screens/BoxOfficeScreen/BoxOfficeScreen.component";
import AuthScreen from "./src/screens/Auth/Auth.component";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./src/components/tab-bar/tab-bar.component";
import { getTokenAuth } from "./src/store/Auth/auth.thunk";
import SplashScreen from "./src/screens/Splash/splash.component";
import { MovieDetailScreen } from "./src/screens/MovieDetail/movieDetail.component";
import { HomeStackParamList, RootStackParamList, TicketStackParamList } from "./src/entity/navigation.entity";
// ================= STACK =================
const RootStack = createNativeStackNavigator<RootStackParamList>();
const HomeStackNavigator = createNativeStackNavigator<HomeStackParamList>();
const TicketStackNavigator = createNativeStackNavigator<TicketStackParamList>();
const AuthOnlyStack = createNativeStackNavigator<{ Auth: undefined }>();
const BottomTab = createBottomTabNavigator();

// ================= TICKET STACK =================
const TicketStack = () => (
  <TicketStackNavigator.Navigator screenOptions={{ headerShown: false }}>
    <TicketStackNavigator.Screen name="TicketMain" component={TheaterSystemUI} />
    <TicketStackNavigator.Screen name="BoxOffice" component={BoxOfficeScreen} />
  </TicketStackNavigator.Navigator>
);
const HomeStack = () => (
  <HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
    <HomeStackNavigator.Screen name="Home" component={HomePage} />
    <HomeStackNavigator.Screen name="DetailMovie" component={MovieDetailScreen} />
  </HomeStackNavigator.Navigator>
)
// ================= MAIN TAB =================
const MainTab = () => (
  <BottomTab.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <TabBar {...props} />}
  >
    <BottomTab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{ tabBarLabel: "Trang chủ", icon: "home-outline" } as any}
    />

    <BottomTab.Screen
      name="Ticket"
      component={TicketStack}
      options={{ tabBarLabel: "Đặt vé", icon: "ticket-outline" } as any}
    />
    <BottomTab.Screen
      name="MyTicket"
      component={TicketStack}
      options={{ tabBarLabel: "Cụm rạp", icon: "ticket-outline" } as any}
    />
    <BottomTab.Screen
      name="profile"
      component={TicketStack}
      options={{ tabBarLabel: "Tài khoản", icon: "person-outline" } as any}
    />
  </BottomTab.Navigator>
);

// ================= AUTH STACK =================
const AuthStack = () => (
  <AuthOnlyStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthOnlyStack.Screen name="Auth" component={AuthScreen} />
  </AuthOnlyStack.Navigator>
);

// ================= ROOT NAV =================
const RootNavigator = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500);
  // }, []);

  useEffect(() => {
    const initApp = async () => {
      try {
        await dispatch(getTokenAuth()).unwrap();
      } catch (error: any) {
        console.error("Error fetching token:", error);
      } finally {
        setIsLoading(false);
      }
    }

    initApp();
  }, []);
  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {token ? (
          <RootStack.Screen name="MainApp" component={MainTab} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthStack} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

// ================= APP =================
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;