import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  Modal,
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
  icon: string;
  iconSet: React.ComponentType<{ name: string; size: number; color: string }>;
  color: string;
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
const ServiceCard: React.FC<ServiceCardProps> = ({ title, onPress }) => {
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

export default function HomeScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme(); // returns 'light' or 'dark
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = useCallback(() => setModalVisible(true), []);
  const closeModal = useCallback(() => setModalVisible(false), []);

  const openSheet = useCallback(() => {
    // sheetRef.current?.expand();
  }, []);

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
        {/* Location Header */}
        <View style={styles.headerContainer}>
          <View style={styles.locationContent}>
            <View style={styles.locationRow}>
              {/* <MaterialIcons name="location-on" size={20} color="#4CAF50" /> */}
              <Text style={styles.locationMainText}>Krishnapur</Text>
            </View>
            <TouchableOpacity style={styles.locationContainer}>
              <Text style={styles.locationSubText} numberOfLines={1}>
                Kestopur-Kolkata-West Bengal 700102...
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.cartButton}>
            <Feather name="shopping-cart" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Main Service Categories */}
        <View style={styles.sectionContainer}>
          <View style={styles.servicesGrid}>
            <ServiceCard title="Women's Salon & Spa" onPress={openModal} />

            <ServiceCard title="Men's Salon & Massage" />
            <ServiceCard title="AC & Appliance Repair" />
            <ServiceCard title="Cleaning & Pest Control" />
            <ServiceCard title="Electrician, Plumber & Carpenter" />
            <ServiceCard title="Native Water Purifier" />
            <ServiceCard title="Native Smart Locks" />
            <ServiceCard title="Full home painting" />
            <ServiceCard title="Pest Control" />
          </View>
        </View>
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        {/* Container to stack backdrop & content */}
        <View style={styles.modalContainer}>
          {/* Dimmed background */}
          <TouchableOpacity
            style={styles.backdrop}
            activeOpacity={1}
            onPress={closeModal}
          />
          {/* Bottom sheet content */}
          <View style={styles.modalContent}>
            <Text style={styles.sheetTitle}>Women's Salon & Spa</Text>
            {/* … your sub‑services UI here … */}
          </View>
        </View>
      </Modal>
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
    justifyContent: "space-between",
    // marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    // borderWidth:1,
    overflow: "hidden",
    height: 80,
  },
  locationContent: {
    flex: 1,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth:1,
  },
  locationContainer: {
    // marginLeft: 28,
  },
  locationMainText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    // marginLeft: 8,
  },
  locationSubText: {
    fontSize: 12,
    color: "#666",
    maxWidth: "90%",
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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    // position at bottom
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
