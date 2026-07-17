import{Text,Image,View,KeyboardAvoidingView,Platform,StyleSheet,Alert,TextInput,Pressable,} from "react-native";
import { router } from "expo-router";

import { useState } from "react";

export default function Forgot() {
const [email,setEmail]=useState("");

const handleForgot = () => {
    if (email.trim()===""){
         Alert.alert("Error","Please enter your email.");
    return;
    }
     Alert. alert("Success","Registration Successful!");
};

return(<KeyboardAvoidingView style={{flex:1}}
behavior={Platform.OS === "ios" ? "padding" : "height"}>
<Image source={require("../assets/images/logo.png")}
 style= { styles.logo}/>
<Text style={styles.topText} >Forgot Password</Text>
<Text style={styles.label}> Enter your registered email to receive a password reset link.</Text>
<TextInput style={styles.input}
    placeholder={"enter your mail id"}
    keyboardType="email-address"
    autoCapitalize="none"
    value={email}
    onChangeText={setEmail}
/>

<Pressable style={styles.link} onPress={handleForgot}>
    
    <Text>SEND RESET LINK</Text>
</Pressable>

<Text style={styles.bottomText}>Remember your password?</Text>
<Pressable
 
  onPress={() => router.push("/login")}
>
  <Text style={styles.loginLinkText}>Go Back To Login</Text>
</Pressable>
    


</KeyboardAvoidingView>);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 25,
    justifyContent: "center",
  },

  logo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginBottom: 20,
  },

  topText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },

  input: {
    height: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 25,
  },

  link: {
    backgroundColor: "#2563EB",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  linkText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  bottomText: {
    textAlign: "center",
    marginTop: 25,
    color: "#555",
    fontSize: 15,
  },

  loginLinkText: {
    textAlign: "center",
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});