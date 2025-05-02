import { StyleSheet, View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import EventItem from "../componants/eventItem";
import { fetchEvents } from "../http/http";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEventsAction } from "../store/eventsSlice";
import { GlobalColors } from "../constants/colors";
import ErrorOverlay from "../componants/error/error";

function Dashboard() {
  const id = useSelector((state) => state.loginRed.loginedIn);
  const events = useSelector((state) => state.eventsRed.events);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const registeredEvents = events.filter((event) =>
    event.registeredIDs?.includes(id)
  );

  useEffect(() => {
    const handleFetchEvents = async () => {
      try {
        const fetchedEvents = await fetchEvents();
        dispatch(addEventsAction(fetchedEvents));
      } catch (error) {
        setError("could not fetch events list");
      }
    };
    handleFetchEvents();
  }, []);

  function handleError() {
    setError(null);
  }

  if (error) {
    return <ErrorOverlay message={error} onConfirm={handleError} />;
  }

  function registeredEventlistrenderItem(itemData) {
    return <EventItem {...itemData.item} />;
  }
  return (
    <View style={styles.listContainer}>
      {registeredEvents.length === 0 && (
        <Text style={styles.text}>Please Register to Events</Text>
      )}
      <FlatList
        data={registeredEvents}
        keyExtractor={(item) => item.id}
        renderItem={registeredEventlistrenderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalColors.primary400,
  },
  text: {
    marginTop: 50,
    fontSize: 24,
  },
  title: {
    marginTop: 24,
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
  },
});

export default Dashboard;
