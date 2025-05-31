import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
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
import SearchBar from "../../components/SearchBar";

// Type for icon data
type IconData = {
  icon: string;
  iconSet: React.ComponentType<{ name: string; size: number; color: string }>;
  color: string;
};

// Icon mapping
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

// Props for service card
type ServiceCardProps = {
  title: string;
  onPress: (title: string) => void;
};

// Service card
const ServiceCard: React.FC<ServiceCardProps> = ({ title, onPress }) => {
  const serviceIcon = SERVICE_ICONS[title];
  const IconComponent = serviceIcon?.iconSet || MaterialCommunityIcons;
  const iconName = serviceIcon?.icon || "help-circle";
  const iconColor = serviceIcon?.color || "#333";

  return (
    <TouchableOpacity style={styles.serviceCard} onPress={() => onPress(title)}>
      <View
        style={[styles.serviceCardImg, { backgroundColor: `${iconColor}20` }]}
      >
        <IconComponent name={iconName} size={32} color={iconColor} />
      </View>
      <Text style={styles.serviceText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Home screen
export default function HomeScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const [search, setSearch] = useState("");

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(300)).current;

  const handleCardPress = (title: string) => {
    if (title === "AC & Appliance Repair") {
      // navigation.navigate("");
    } else {
      showModal(title);
      // setTimeout(() => setModalVisible(true), 100);
      // setSelectedService(serviceName);
      // setModalVisible(true);
    }
  };
  const showModal = (title: string) => {
    setSelectedService(title);
    setModalVisible(true);

    // Slide up animation
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  const closeModal = () => {
    // setModalVisible(false);
    // setSelectedService(null);
    Animated.timing(slideAnim, {
      toValue: 300, // Slide back down
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false); // Hide modal after animation
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colorScheme === "dark" ? "#000" : "#fff"}
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
        <View style={styles.stickyHeader}>
          <SearchBar value={search} onChangeText={setSearch} />
        </View>

        {/* Main Service Categories */}
        <View style={styles.sectionContainer}>
          <View style={styles.servicesGrid}>
            {Object.keys(SERVICE_ICONS).map((service) => (
              <ServiceCard
                key={service}
                title={service}
                onPress={handleCardPress}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Sheet Modal */}
      {isModalVisible && (
        <Modal
          visible={isModalVisible}
          transparent
          animationType="none"
          onRequestClose={closeModal}
        >
          <TouchableOpacity
            style={styles.backdrop}
            onPress={closeModal}
            activeOpacity={1}
          />
          <View>
            <Animated.View
              style={[
                styles.modalContent,
                { transform: [{ translateY: slideAnim }] },
              ]}
            >
              <Text style={styles.sheetTitle}>{selectedService}</Text>
              {selectedService === "Women's Salon & Spa" && (
                <>
                  <Text style={{ color: "#555", marginBottom: 10 }}>
                    Welcome to the Women's Salon & Spa! Choose from haircuts,
                    facials, and massages.
                  </Text>
                  <Text style={{ color: "#555", marginBottom: 10 }}>
                    We provide premium products and services tailored for women.
                  </Text>
                  <Text style={{ color: "#555", marginBottom: 10 }}>
                    Welcome to the Women's Salon & Spa! Choose from haircuts,
                    facials, and massages.
                  </Text>
                  <Text style={{ color: "#555", marginBottom: 10 }}>
                    We provide premium products and services tailored for women.
                  </Text>
                  <Text style={{ color: "#555", marginBottom: 10 }}>
                    Welcome to the Women's Salon & Spa! Choose from haircuts,
                    facials, and massages.
                  </Text>
                  <Text style={{ color: "#555", marginBottom: 10 }}>
                    We provide premium products and services tailored for women.
                  </Text>
                  <Text style={{ color: "#555", marginBottom: 10 }}>
                    Welcome to the Women's Salon & Spa! Choose from haircuts,
                    facials, and massages.
                  </Text>
                  <Text style={{ color: "#555", marginBottom: 10 }}>
                    We provide premium products and services tailored for women.
                  </Text>
                </>
              )}

              {selectedService === "Men's Salon & Massage" && (
                <>
                  <Text style={{ color: "#555", marginBottom: 10 }}>
                    Men's grooming and massage services designed for relaxation.
                  </Text>
                  <Text style={{ color: "#555", marginBottom: 10 }}>
                    Book a haircut, beard trim, or deep tissue massage today.
                  </Text>
                </>
              )}
              {![
                "Women's Salon & Spa",
                "Men's Salon & Massage",
                "AC & Appliance Repair",
              ].includes(selectedService || "") && (
                <Text style={{ color: "#555" }}>
                  Details and options for "{selectedService}" will go here.
                </Text>
              )}
              <TouchableOpacity onPress={closeModal} style={styles.closeModel}>
                <Image
                  style={{ height: 15 }}
                  resizeMode="contain"
                  source={require("../../assets/icons/close.png")}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  container: {
    flex: 1,
  },
  scrollContent: {},
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    height: 80,
  },
  locationContent: {
    flex: 1,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationContainer: {},
  locationMainText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
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
  backdrop: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Static dark background
    justifyContent: "flex-end",
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom:50
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  closeModel: {
    alignSelf: "flex-end",
    position: "absolute",
    top: -45,
    right: 15,
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  stickyHeader:{
    padding:16
  }
  
});
