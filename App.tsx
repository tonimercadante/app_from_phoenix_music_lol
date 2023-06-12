import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feed from "./src/view/Feed";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Decoy() {
  return <></>;
}

type TypeImageSources = {
  previous: ImageSourcePropType;
  feed: ImageSourcePropType;
  share: ImageSourcePropType;
  foward: ImageSourcePropType;
};

const CustomTabButton = ({ onPress }: { onPress: () => {} }) => {
  return <TouchableOpacity onPress={onPress}></TouchableOpacity>;
};

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const canRedirect = (name: string): boolean => {
          console.log(name);
          const allowList = ["Feed", "Share"];

          if (allowList.includes(name)) {
            return true;
          }

          return false;
        };

        const imageSources: TypeImageSources = {
          previous: require("./assets/img/iconprevious.png"),
          feed: require("./assets/img/iconfeed.png"),
          share: require("./assets/img/iconshare.png"),
          foward: require("./assets/img/iconfoward.png"),
        };

        const image: ImageSourcePropType =
          imageSources[route.name.toLowerCase() as keyof TypeImageSources];

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={canRedirect(route.name) ? onPress : () => null}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              paddingTop: 10,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            }}
          >
            <Image style={{}} source={image} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen name="Previous" component={Decoy} />

        <Tab.Screen name="Feed" component={Feed} />

        <Tab.Screen name="Share" component={Feed} />

        <Tab.Screen name="Foward" component={Decoy} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
