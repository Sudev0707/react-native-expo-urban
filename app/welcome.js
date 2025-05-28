import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [countdown, setCountdown] = useState(5); // 5 seconds countdown
  // Handle navigation separately from state updates
  const navigateToApp = () => {
    router.replace("/(tabs)");
  };

  // Countdown effect
  useEffect(() => {
    let mounted = true;

    const timer = setInterval(() => {
      if (mounted) {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // Use setTimeout to defer navigation
            // setTimeout(navigateToApp, 0);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, []);

  const handleSkip = () => {
    // Use setTimeout to defer navigation
    // setTimeout(navigateToApp, 0);
    router.replace("/(tabs)");
  };

  const handleNext = () => {
    router.replace("");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={{ uri: "https://example.com/welcome-image.jpg" }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={[styles.title, { color: colors.text }]}>
        Welcome to Our App
      </Text>
      <Text style={[styles.subtitle, { color: colors.text }]}>
        Discover amazing features and services
      </Text>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={[styles.skipText, { color: colors.tint }]}>
            Skip ({countdown}s)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  footer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
  },
  skipButton: {
    padding: 15,
  },
  skipText: {
    fontSize: 16,
  },
});
