import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";

export default function Beauty() {
  const { width } = useWindowDimensions();

  // Sample data for services
  const services = [
    {
      id: "1",
      title: "Salon Services",
      description:
        "Haircuts, styling, coloring, and more from top salons near you.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: "Spa Treatments",
      description:
        "Relax with massages, facials, and rejuvenating spa therapies.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: "At-Home Services",
      description:
        "Get professional beauty care delivered right at your doorstep.",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.title, { fontSize: width * 0.07 }]}>
          Beauty Services
        </Text>
        <Text style={[styles.subtitle, { fontSize: width * 0.045 }]}>
          Explore salons, spas, and at-home services.
        </Text>

        {/* Services list */}
        <View style={{ width: "100%" }}>
          {services.map((service) => (
            <View key={service.id} style={[styles.card, { width: width - 40 }]}>
              <Image
                source={{ uri: service.image }}
                style={[styles.image, { height: (width - 40) * 0.5 }]}
                resizeMode="cover"
              />
              <View style={styles.cardContent}>
                <Text style={[styles.cardTitle, { fontSize: width * 0.05 }]}>
                  {service.title}
                </Text>
                <Text
                  style={[styles.cardDescription, { fontSize: width * 0.035 }]}
                >
                  {service.description}
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  subtitle: {
    color: "#666",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4, // for Android shadow
    overflow: "hidden",
  },
  image: {
    width: "100%",
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },
  cardDescription: {
    color: "#555",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#FF6F61",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
