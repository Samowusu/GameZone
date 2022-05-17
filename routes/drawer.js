import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const RootDrawerNavigator = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator.Navigator>
        <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
        <RootDrawerNavigator.Screen name="About" component={AboutStack} />
      </RootDrawerNavigator.Navigator>
    </NavigationContainer>
  );
}
