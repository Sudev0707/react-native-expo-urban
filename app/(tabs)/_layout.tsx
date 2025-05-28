import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tabBarColors = Colors[colorScheme ?? "light"];

  const tabScreenOptions = {
    headerShown: false,
    tabBarActiveTintColor: tabBarColors.tint,
    tabBarInactiveTintColor: tabBarColors.tabIconDefault,
    tabBarStyle: {
      backgroundColor: tabBarColors.tabBar,
      borderTopWidth: 0,
      elevation: 0,
      height: 60,
      paddingBottom: 4,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: "500",
      marginBottom: 4,
    },
  };

  const tabs = [
    // {
    //   name: "index",
    //   title: "UC",
    //   icon: ({ focused }: { focused: boolean }) => (
    //     <Image
    //       source={require("../assets/icons/uc-icon.png")}
    //       style={{
    //         width: 24,
    //         height: 24,
    //         tintColor: focused ? "#000" : "#aaa",
    //         resizeMode: "contain",
    //       }}
    //     />
    //   ),
    // },
    {
      name: "index",
      title: "UC",
      icon: (focused: boolean, color: string) => (
        <MaterialIcons
          name={focused ? "explore" : "explore-outlined"}
          size={24}
          color={color}
        />
      ),
    },
    {
      name: "explore",
      title: "Homes",
      icon: (focused: boolean, color: string) => (
        <Ionicons
          name={focused ? "home" : "home-outline"}
          size={24}
          color={color}
        />
      ),
    },
    {
      name: "beauty",
      title: "Beauty",
      icon: (focused: boolean, color: string) => (
        <FontAwesome
          name={focused ? "scissors" : "scissors"}
          size={20}
          color={color}
        />
      ),
    },
    {
      name: "native",
      title: "Native",
      icon: (focused: boolean, color: string) => (
        <Ionicons
          name={focused ? "leaf" : "leaf-outline"}
          size={24}
          color={color}
        />
      ),
    },
    {
      name: "account",
      title: "Account",
      icon: (focused: boolean, color: string) => (
        <Ionicons
          name={focused ? "person" : "person-outline"}
          size={24}
          color={color}
        />
      ),
    },
  ];

  return (
    <Tabs screenOptions={tabScreenOptions}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, focused }) => tab.icon(focused, color),
            // Add badge if needed
            // tabBarBadge: tab.name === 'explore' ? 3 : undefined,
          }}
        />
      ))}
    </Tabs>
  );
}
