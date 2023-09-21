import * as React from "react";
import { Button, SafeAreaView, StatusBar, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MyTab from "./navigation/MyTab";
import DrawerScreen from "./screens/Drawer/DrawerScreen";
import SettingNavigation from "./navigation/SettingNavigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { COLOR } from "./constants/color";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar hidden={true} backgroundColor={COLOR.primary}></StatusBar>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{ headerShown: false }}
          drawerContent={(prop) => <DrawerScreen {...prop} />}
          initialRouteName="MyTab"
        >
          <Drawer.Screen name="MyTab" component={MyTab} />
          <Drawer.Screen name="Setting" component={SettingNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
