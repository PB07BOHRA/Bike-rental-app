import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";


import { useState } from "react";
export default function Register() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword,setshowPassword]=useState(false);
const [fullName, setfullName] = useState("");
const[confirmPassword,setconfirmPassword]=useState("");
const[phoneNumber,setPhoneNumber]=useState("");
const handleRegister = () => {


    if(fullName.trim()===""){
    Alert.alert("Error","Please enter your full name ");
    return;
  }
  if (email.trim() === "") {
    Alert.alert("Error","Please enter your email.");
    return;
  }
if (phoneNumber.trim() === "") {
    Alert.alert("Error","Please enter your Phone number.");
    return;
  }
  if (phoneNumber.length !== 10) {
    Alert.alert("Error","Please enter your Correct Phone number.");
    return;
  }
  if (password.trim() === "") {
    Alert.alert("Error","Please enter your password.");
    return;
  }

  if(confirmPassword.trim()===""){
    Alert.alert("Error","Please enter Confirm password ");
    return;
  }if (confirmPassword !== password) {
  Alert.alert("Error", "Passwords do not match.");
  return;
}
 Alert. alert("Success","Registration Successful!");

};
  return ( <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
<ScrollView
  contentContainerStyle={styles.container}
  showsVerticalScrollIndicator={false}
>
  
  <Image
  source={require("../assets/images/logo.png")}
  style={styles.logo}
/>

<Text style={styles.head} >Create Acctount</Text>

<Text style={styles.label}>Full Name</Text>

<TextInput 
placeholder="Enter Your name "
value={fullName}
onChangeText={setfullName}


style={styles.input}/>
<Text style={styles.label}>Email</Text>
 <TextInput
  placeholder="Enter your email"
  keyboardType="email-address"
  autoCapitalize="none"
  style={styles.input}
  value={email}
  onChangeText={setEmail}
/>
<Text style={styles.label}>Phone Number</Text>

<TextInput
  placeholder="Enter your phone number"
  keyboardType="phone-pad"
  style={styles.input}
  value={phoneNumber}
  onChangeText={setPhoneNumber}
  maxLength={10}
/>
<Text style={styles.label}>Password</Text>
<TextInput
  placeholder="Enter your password"
  secureTextEntry={!showPassword}
  autoCapitalize="none"
  style={styles.input}
  value={password}
  onChangeText={setPassword}
/>
<Text style={styles.label}>Confirm Password</Text>
<TextInput 
placeholder="Confirm Your Password"
 secureTextEntry={!showPassword}
  autoCapitalize="none"
  style={styles.input}
  value={confirmPassword}
  onChangeText={setconfirmPassword}
/>
<Pressable style={styles.registerButton}
  onPress={handleRegister}
 
  >
  <Text style={styles.registerText}>Register</Text>
</Pressable>

<Text style={styles.bottomText}>Already have an account?</Text>
<Pressable
 
  onPress={() => router.push("/login")}
>
  <Text style={styles.loginLinkText}>Login</Text>
</Pressable>
</ScrollView></KeyboardAvoidingView>
  );

}
const styles = StyleSheet.create({
 container: {
  flexGrow: 1,
  backgroundColor: "#F5F5F5",
  paddingHorizontal: 25,
  paddingTop: 40,
  paddingBottom: 30,
},

  logo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginBottom: 15,
  },

  head: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    marginTop: 8,
  },

  input: {
    height: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 15,
    fontSize: 16,
  },

  registerButton: {
   backgroundColor: "#2563EB",
  height: 56,
  borderRadius: 30,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 25,
  elevation: 5,

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  },

  registerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  bottomText: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 15,
    color: "#555",
  },


  loginLinkText: {
    textAlign: "center",
  color: "#2563EB",
  fontSize: 16,
  fontWeight: "bold",
  marginTop: 6,
},
});