import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword,setshowPassword]=useState(false);
const handleLogin = () => {

  if (email.trim() === "") {
    Alert.alert("Error","Please enter your email.");
    return;
  }

  if (password.trim() === "") {
    Alert.alert("Error","Please enter your password.");
    return;
  }

 Alert. alert("Success","Login Successful!");

};
    return (
    
   
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <ScrollView
      contentContainerStyle={{ flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Welcome Back
      </Text>
      <Image
  source={require("../assets/images/logo.png")}
  style={styles.logo}
/>

      <Text style={styles.subtitle}>
        Login to your account
      </Text>

      <Text style={styles.label}>
        Email
      </Text>

    <TextInput
  placeholder="Enter your email"
  keyboardType="email-address"
  autoCapitalize="none"
  style={styles.input}
  value={email}
  onChangeText={setEmail}
/>
      <Text style={styles.label}>
        Password
      </Text>

<TextInput
  placeholder="Enter your password"
  secureTextEntry={!showPassword}
  autoCapitalize="none"
  style={styles.input}
  value={password}
  onChangeText={setPassword}
/>
<TouchableOpacity
  onPress={() => setshowPassword(!showPassword)}
>
  <Text
    style={{
      color: "#2563EB",
      marginTop: 10,
      alignSelf: "flex-end",
    }}
  >
    {showPassword ? "Hide Password" : "Show Password"}
  </Text>
</TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
<TouchableOpacity
  style={styles.loginButton}
  onPress={handleLogin}
>
  <Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>

      <Text style={styles.bottomText}>
        Don't have an account?
      </Text>

      <TouchableOpacity>
        <Text style={styles.register}>
          Create Account
        </Text>
      </TouchableOpacity>

       </SafeAreaView>
    </ScrollView>
  </KeyboardAvoidingView>
);

}
const styles = StyleSheet.create({
 container: {
  flexGrow: 1,
  backgroundColor: "#F5F5F5",
  padding: 25,
  justifyContent: "flex-start",
},
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    height: 55,
  },

  forgot: {
    textAlign: "right",
    color: "#2563EB",
    marginTop: 12,
  },

 loginButton: {
  backgroundColor: "#2563EB",
  height: 55,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 12,
  marginTop: 20,
  elevation: 5,
},

  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  bottomText: {
    textAlign: "center",
    marginTop: 35,
    color: "#555",
  },

  register: {
    textAlign: "center",
    color: "#2563EB",
    fontWeight: "bold",
    marginTop: 8,
  },
logo: {
  width: 140,
  height: 140,
  alignSelf: "center",
  marginBottom: 10,
},
});