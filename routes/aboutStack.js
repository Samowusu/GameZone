import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../shared/Header";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AboutPage"
        component={About}
        options={(props) => {
          return {
            headerTitle: () => {
              return (
                <Header navigation={props.navigation} title="About GameZone" />
              );
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}
