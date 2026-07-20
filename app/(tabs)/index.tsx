import { ScrollView,StyleSheet, Text, View, Image, Pressable ,TextInput, } from "react-native";
import { router } from "expo-router";
export default function HomeScreen() {
  return (
     <ScrollView
  contentContainerStyle={styles.container}
  showsVerticalScrollIndicator={false}
>
 
  
  <Image
  source={require("../../assets/images/logo.png")}
  style={styles.logo}
/>
 

  
      <Text style={styles.title}>
           Ghoomakad Bike Rental 
      </Text>

      <Text style={styles.subtitle}>
        Hello 👋
      </Text>
      <Text style={styles.subtitle}>
       Find your perfect ride.
      </Text>
   <TextInput
  placeholder="Search bike..."
  style={styles.searchInput}
/>
<View style={styles.Categories}>
<Pressable
  style={styles.categoryButton}>
  <Text style={styles.categoryText}
  >Sport</Text>
  </Pressable>
<Pressable
  style={styles.categoryButton}
 
>
  <Text style={styles.categoryText}>Scooty</Text>
</Pressable>
<Pressable
  style={styles.categoryButton}
 
>
  <Text style={styles.categoryText}>Adventure</Text>
</Pressable>

<Pressable
  style={styles.categoryButton}
 
>
  <Text style={styles.categoryText}>Cruiser</Text>
</Pressable>
</View>
<Text style={styles.TextPopularBike}>Popular Bikes</Text>
    <View style={styles.bikeCard}>
      <Image
  source={require("../../assets/images/logo.png")}
  style={styles.logo}
/>
<Text style={styles.bikeName}>Royal Enfield Classic 350
</Text>
<Text style={styles.bikePrice}>999/day
</Text>
<Text style={styles.bikeRating}>⭐4.8

</Text>
<Pressable style={styles.detailButton}>
<Text style={styles.detailButtonText}>View

</Text>
</Pressable>
</View>
<View style={styles.BottomNavigation}
>
  <Text style={styles.navItem}>Home

</Text>
<Text style={styles.navItem}>Bookings

</Text>
<Text style={styles.navItem}>Profile

</Text>
</View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    padding: 20,
    paddingBottom: 40,
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 17,
    color: "#555",
    textAlign: "center",
    marginTop: 5,
  },

  searchInput: {
    marginTop: 25,
    backgroundColor: "#FFFFFF",
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    fontSize: 16,
  },

  Categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 25,
  },

  categoryButton: {
    backgroundColor: "#2563EB",
    width: 80,
    height: 42,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  TextPopularBike: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 15,
  },

  bikeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    alignItems: "center",
    elevation: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },

  bikeName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginTop: 10,
    textAlign: "center",
  },

  bikePrice: {
    fontSize: 18,
    color: "#2563EB",
    fontWeight: "700",
    marginTop: 8,
  },

  bikeRating: {
    fontSize: 16,
    color: "#F59E0B",
    marginTop: 5,
    marginBottom: 15,
  },

  detailButton: {
    backgroundColor: "#2563EB",
    width: "70%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },

  detailButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  BottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 20,

    elevation: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  navItem: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2563EB",
  },
});