import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from '../../context/auth';

export default function Login() {
  const { login } = useAuth();

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={login} />
      <Link href="/signup">Don't have an account? Sign up</Link>
    </View>
  );
}