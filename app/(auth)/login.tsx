import { View, Text, Button, TextInput } from "react-native";
import { Link } from "expo-router";
import { useAuth } from "../../context/auth";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Create a handler function that calls login with the required parameters
  const handleLogin = () => {
    login(email, password);
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Link href={{ pathname: "/(auth)/signup" }}>
        Don't have an account? Sign up
      </Link>
    </View>
  );
}
