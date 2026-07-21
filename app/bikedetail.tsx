import { View, Text, Image, StyleSheet,Pressable, } from "react-native";
import { useLocalSearchParams } from "expo-router";

const bikes = [
  {
    id: 1,
    name: "Royal Enfield Classic 350",
    price: "₹999/day",
    rating: "⭐4.8",
    image: require("../assets/images/royal350.png"),
  },
  {
    id: 2,
    name: "Royal Enfield Himalayan",
    price: "₹1199/day",
    rating: "⭐4.7",
    image: require("../assets/images/himalayan450.png"),
  },
];

export default function BikeDetails() {
  const { id } = useLocalSearchParams();

  const selectedBike = bikes.find(
    (bike) => bike.id == Number(id)
  );

  if (!selectedBike) {
    return (
      <View style={styles.container}>
        <Text>Bike not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Image
        source={selectedBike.image}
        style={styles.image}
      />

      <Text style={styles.name}>
        {selectedBike.name}
      </Text>

      <Text style={styles.price}>
        {selectedBike.price}
      </Text>

      <Text style={styles.rating}>
        {selectedBike.rating}
      </Text>
 <Pressable style={styles.detailButton}
    >
      <Text style={styles.detailButtonText}>
        Book
      </Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  image: {
    width: 300,
    height: 220,
    resizeMode: "contain",
    marginTop: 30,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  price: {
    fontSize: 22,
    color: "#2563EB",
    marginTop: 10,
  },

  rating: {
    fontSize: 20,
    marginTop: 10,
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
});