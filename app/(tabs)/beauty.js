import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Type for icon data
type IconData = {
  icon: string,
  iconSet: React.ComponentType<{ name: string, size: number, color: string }>,
  color: string,
};

const SERVICE_ICONS: Record<string, IconData> = {
  "Women's Salon & Spa": {
    icon: "face-woman-shimmer",
    iconSet: MaterialCommunityIcons,
    color: "#F06292",
  },
  "Men's Salon & Massage": {
    icon: "face-man-shimmer",
    iconSet: MaterialCommunityIcons,
    color: "#64B5F6",
  },
  "AC & Appliance Repair": {
    icon: "air-conditioner",
    iconSet: MaterialCommunityIcons,
    color: "#4ECDC4",
  },
  "Cleaning & Pest Control": {
    icon: "spray-bottle",
    iconSet: MaterialCommunityIcons,
    color: "#FFD166",
  },
  "Electrician, Plumber & Carpenter": {
    icon: "hammer-screwdriver",
    iconSet: MaterialCommunityIcons,
    color: "#06D6A0",
  },
  "Native Water Purifier": {
    icon: "water-pump",
    iconSet: MaterialCommunityIcons,
    color: "#118AB2",
  },
  "Native Smart Locks": {
    icon: "lock-smart",
    iconSet: MaterialCommunityIcons,
    color: "#073B4C",
  },
  "Full home painting": {
    icon: "format-paint",
    iconSet: MaterialCommunityIcons,
    color: "#EF476F",
  },
  "Pest Control": {
    icon: "bug",
    iconSet: MaterialCommunityIcons,
    color: "#FF8C42",
  },
};

// ServiceCard component
const ServiceCard = ({ title }: { title: string }) => {
  const serviceIcon = SERVICE_ICONS[title];
  const IconComponent = serviceIcon?.iconSet || MaterialCommunityIcons;
  const iconName = serviceIcon?.icon || "help-circle";
  const iconColor = serviceIcon?.color || "#333";

  return (
    <TouchableOpacity style={styles.serviceCard}>
      <View
        style={[styles.serviceCardImg, { backgroundColor: `${iconColor}20` }]}
      >
        <IconComponent name={iconName} size={32} color={iconColor} />
      </View>
      <Text style={styles.serviceText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Beauty() {
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
      >
        {/* Home Header */}
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            name="mirror" // “mirror” icon from MCI
            size={20}
            color="#FF6B6B" // pink/red accent
            style={styles.icon}
          />
          <Text style={styles.text}>
            <Text style={styles.headerTitle}>Personal</Text>
            <Text style={styles.headerSubtitle}> grooming</Text>
          </Text>
        </View>

        {/* Main Service Categories */}
        <View style={styles.sectionContainer}>
          <View style={styles.servicesGrid}>
            {/* <ServiceCard title="Women's Salon & Spa" />
            <ServiceCard title="Men's Salon & Massage" />
            <ServiceCard title="AC & Appliance Repair" />
            <ServiceCard title="Cleaning & Pest Control" />
            <ServiceCard title="Electrician, Plumber & Carpenter" />
            <ServiceCard title="Native Water Purifier" />
            <ServiceCard title="Native Smart Locks" />
            <ServiceCard title="Full home painting" />
            <ServiceCard title="Pest Control" /> */}
          </View>
        </View>
      </ScrollView>
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    // paddingVertical: 12,
    backgroundColor: "#fff",
    // borderWidth:1,
    paddingTop: 20,
    paddingBottom: 20,
    height: 80,
  },
  icon: {
    marginRight: 8,
  },
  headerSubtitle: {
    color: "#555",
    fontSize: 20,
  },
  headerTitle: {
    fontWeight: "600",
    color: "#000",
    fontSize: 20,
  },
  ationRow: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth:1,
  },

  cartButton: {
    padding: 8,
  },
  sectionContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    // borderWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 15,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
    columnGap: "2%",
  },

  serviceCard: {
    width: "31%",
    alignItems: "center",
    marginBottom: 16,
  },

  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  serviceCardImg: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    height: 80,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  emptyCard: {
    width: "48%",
  },
});
