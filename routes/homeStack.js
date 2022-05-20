import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
        },
        headerTitleStyle: {
          fontFamily: "Nunito_700Bold",
        },
        headerTintColor: "#444",
      }}
    >
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={(props) => {
          return {
            headerTitle: () => {
              return <Header navigation={props.navigation} title="GameZone" />;
            },
          };
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: "Review Details" }}
      />
    </Stack.Navigator>
  );
}
