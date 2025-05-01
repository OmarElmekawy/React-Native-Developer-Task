import { Image, Text, View, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalColors } from "../constants/colors";

function EventItem(props) {
  const navigation = useNavigation();

  const { eventName, price, date_time, location, id, image } = props;

  function handleNavigation() {
    navigation.navigate("EventDetails", { eventId: id, event: props });
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable onPress={handleNavigation} styles={styles.press}>
        <View>
          <Image source={{ url: image }} style={styles.image} />
          <Text style={styles.title}>{eventName}</Text>
        </View>
        <View style={styles.detailsContainder}>
          <Text style={styles.text}>{date_time}</Text>
          <Text style={styles.text}>${price}</Text>
          <Text style={styles.text}>{location}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default EventItem;

const styles = StyleSheet.create({
  outerContainer: {
    height: 230,
    borderRadius: 6,
    margin: 20,
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOffset: { width: 5, height: 5 },
    backgroundColor:GlobalColors.primary200
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 5,
    borderRadius: 6,
  },
  detailsContainder: {
    flexDirection: "row",
    justifyContent: "center",
  },
  press: {
    flex: 1,
  },
  text: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
});
