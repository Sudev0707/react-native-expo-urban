import { useNavigation } from "@react-navigation/native";
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Native() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme(); // returns 'light' or 'dark'

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colorScheme === "dark" ? "#000" : "#fff"}
        //  backgroundColor="transparent"
        translucent={false}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      ></ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: "#f5f5f5",
    backgroundColor: "#f8f8f8",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    // padding: 16,
  },
});
