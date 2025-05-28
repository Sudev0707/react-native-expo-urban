import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, Text, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  useEffect(() => {
    const timer = setTimeout(() => {
    //   router.replace('/welcome');
      router.replace('/signup');
    }, 2000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

//   const handleSkip = () => {
//     router.replace('/(tabs)');
//   };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <Image 
        source={require('../assets/images/letter-a.png')} 
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ fontSize: 24, marginTop: 20, color: colors.text }}>Welcome to Our App</Text>
      

    </View>
  );
}