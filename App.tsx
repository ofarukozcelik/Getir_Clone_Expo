import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import * as Linking from "expo-linking";
import { NavigationContainer } from "@react-navigation/native";
import RouteNavigators from "./src/navigators/RouteNavigators";

import store from "./src/redux/store";
import { Provider } from "react-redux";

const prefix = Linking.createURL("/");

export default function App() {

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Search: {
          screens: {
            CartScreen: {
              path: "CartScreen/:message",
              parse: {
                message: (message: string) => `${message}`,
              },
            },
          },
        },
      },
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RouteNavigators />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
