import { Redirect } from 'expo-router';

export default function Index() {
  // If you have authentication, you can check it here
  // const { user } = useAuth();
  
  // For now, just redirect to splash
  return <Redirect href="/splash" />;
}