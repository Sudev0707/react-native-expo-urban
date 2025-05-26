import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';

export default function ProductDetails() {
  const { id, name, image } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Image
        source={{ uri: image ?? 'https://via.placeholder.com/300' }}
        style={styles.image}
        resizeMode="cover"
      /> */}
      <Text style={styles.title}>{name ?? 'Product Name'}</Text>
      <Text style={styles.description}>
        This is a detailed view of the selected product. You can fetch more details using the `id`.
      </Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
