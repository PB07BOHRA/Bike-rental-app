import { StyleSheet, Text, View, Image, Pressable , } from "react-native";
import { router } from "expo-router";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
 
  
  <Image
  source={require("../../assets/images/logo.png")}
  style={styles.logo}
/>
 

  
      <Text style={styles.title}>
           Ghoomakad Bike Rental 
      </Text>

      <Text style={styles.subtitle}>
        Rent Bikes Anytime, Anywhere in Dehradun
      </Text>
<Pressable
  style={styles.loginButton}
  onPress={() => {
    console.log("Going to login...");
    router.push("/login");
  }}
>
  <Text style={styles.loginText}>Login</Text>
</Pressable>
<Pressable
  style={styles.guestButton}
  onPress={() => {
    console.log("Continue as Guest");
    // router.push("/home"); // We'll add this later
  }}
>
  <Text style={styles.guestText}>Continue as Guest</Text>
</Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cac7c7df",

    justifyContent: "center",

    alignItems: "center",

    padding: 20,
  },

  logo:{
      width: 140,
  height: 140,
  marginBottom: 50,
  },


  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E3A8A",
   textAlign:"center",
  },

  subtitle: {
    fontSize: 18,
    color: "#141414",
    marginTop: 12,
    textAlign: "center",
  },
  loginButton: {
  marginTop: 70 ,
  backgroundColor: "#2563EB",
  width: "80%",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
},

loginText: {
  color: "#FFFFFF",
  fontSize: 18,
  fontWeight: "bold",
},
guestButton: {
  marginTop: 15,
  width: "80%",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
  borderWidth: 2,
  borderColor: "#2563EB",
  backgroundColor: "#FFFFFF",
},

guestText: {
  color: "#2563EB",
  fontSize: 18,
  fontWeight: "bold",
},
});