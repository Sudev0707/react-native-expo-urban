import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode] = useState("+91");

  const handleGetCode = () => {
    if (phoneNumber.length === 10) {
      // router.push('/verification');
    }
  };

  const handleSkip = () => {
    router.replace("/(tabs)");
  };

  return (
    <LinearGradient
      //   colors={["#93C5FD", "#DBEAFE"]}
      // colors={['#D1FAE5', '#F0FDF4']}
      // colors={['#BBF7D0', '#DCFCE7']}
      colors={["#BFDBFE", "#DBEAFE"]}
      // colors={['#A7F3D0', '#D1FAE5']}

      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingContainer}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <View style={styles.header}>
            <LottieView
              source={require("../assets/lottie/Animation1748469028299.json")}
              autoPlay
              loop
              style={{
                width: 250,
                height: 250,
                alignSelf: "center",
                marginBottom: 20,
              }}
            />
            {/* <Text style={styles.brandTransition}>UrbanClap is now</Text> */}
            <Text style={styles.brandName}>Urban App</Text>
            <Text style={styles.tagline}>Your Home Service Expert</Text>
            <View style={styles.qualitiesContainer}>
              <Text style={styles.quality}>Quick</Text>
              <Text style={styles.separator}>•</Text>
              <Text style={styles.quality}>Affordable</Text>
              <Text style={styles.separator}>•</Text>
              <Text style={styles.quality}>Trusted</Text>
            </View>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            <View style={styles.phoneInputWrapper}>
              <View style={styles.countryCodeWrapper}>
                <Text style={styles.countryCodeText}>{countryCode}</Text>
                <MaterialIcons name="arrow-drop-down" size={24} color="#333" />
              </View>
              <TextInput
                style={styles.phoneInput}
                placeholder="Enter Mobile Number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                maxLength={10}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.getCodeButton,
                phoneNumber.length === 10
                  ? styles.buttonActive
                  : styles.buttonInactive,
              ]}
              onPress={handleGetCode}
              disabled={phoneNumber.length !== 10}
            >
              <Text style={styles.getCodeButtonText}>
                Get Verification Code
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Skip Button Fixed at Bottom */}
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 80,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  brandTransition: {
    color: "white",
    fontSize: 18,
    marginBottom: 4,
  },
  brandName: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 6,
  },
  tagline: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  qualitiesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quality: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  separator: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 8,
  },
  formContainer: {
    // backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // elevation: 5,
  },
  phoneInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    height: 56,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  countryCodeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#CCC",
    paddingRight: 12,
    marginRight: 12,
  },
  countryCodeText: {
    fontSize: 16,
    color: "#333",
  },
  phoneInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#333",
  },
  getCodeButton: {
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonActive: {
    backgroundColor: "#22C55E",
  },
  buttonInactive: {
    backgroundColor: "#CBD5E1",
  },
  getCodeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  skipButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    padding: 12,
  },
  skipText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
  },

  brandTransition: {
    color: "#1E3A8A",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  brandName: {
    color: "#1E3A8A",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: 1,
  },

  tagline: {
    color: "#1E3A8A",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: 0.8,
  },

  quality: {
    color: "#1E3A8A",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.4,
  },

  separator: {
    color: "#1E3A8A",
    fontSize: 16,
    marginHorizontal: 8,
  },

  countryCodeText: {
    fontSize: 16,
    color: "#1E3A8A",
    fontWeight: "600",
  },

  phoneInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#1E3A8A",
    fontWeight: "600",
  },

  getCodeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  skipText: {
    color: "#1E3A8A",
    fontSize: 16,
    fontWeight: "600",
    textDecorationLine: "underline",
    letterSpacing: 0.3,
  },
});
