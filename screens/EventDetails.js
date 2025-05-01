import { Text, View, Image, StyleSheet } from "react-native";
import { useLayoutEffect, useState } from "react";

import Button from "../UI/button";
import { addUserToRegisteredIDs } from "../http/http";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { registerEventsAction } from "../store/eventsSlice";

function EventDetails({ route, navigation }) {
  const [isRegister, setIsRegister] = useState(false);
  const eventID = route.params.eventId;
  const selectedEvent = route.params.event;
  const userId = useSelector((state) => state.loginRed.loginedIn);
  const dispatch = useDispatch();

  //const selectedEvent = eventsarray.find((event) => event.id === eventID);
  const isRegistered =
    selectedEvent.registeredIDs.includes(userId) || isRegister;

  async function handleRegisterEvents(eventID, userId) {
    setIsRegister(true);
    const data = await addUserToRegisteredIDs(eventID, userId);
    dispatch(registerEventsAction({ eventID, data }));
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedEvent.eventName,
    });
  }, [navigation]);

  return (
    <View style={styles.conntainer}>
      <Image source={{ url: selectedEvent.image }} style={styles.image} />
      <Text style={styles.title}>{selectedEvent.eventName}</Text>
      <Text style={styles.text}>{selectedEvent.date_time}</Text>
      <Text style={styles.text}>{selectedEvent.location}</Text>
      <Text style={styles.text}>The Speakers: {selectedEvent.speakers}</Text>
      <Text style={styles.text}>capacity: {selectedEvent.capacity}</Text>
      <Text style={styles.text}>
        Available Spots: {selectedEvent.availableSpots}
      </Text>
      <Text style={styles.text}>{selectedEvent.description}</Text>
      <View style={styles.button}>
        {!isRegistered && (
          <Button
            buttonText="Register"
            onPress={() => handleRegisterEvents(eventID, userId)}
          />
        )}
      </View>
    </View>
  );
}

export default EventDetails;

// buttonText={isRegiter ? "Registered" : "Register"}

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    padding: 13,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    marginVertical: 8,
    textAlign: "center",
  },
  title: {
    margin: 16,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  button: {
    marginTop: 18,
  },
});
