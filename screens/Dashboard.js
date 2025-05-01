import { StyleSheet, View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import EventItem from "../componants/eventItem";
import { fetchEvents } from "../http/http";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEventsAction } from "../store/eventsSlice";
import { GlobalColors } from "../constants/colors";

function Dashboard() {
  const id = useSelector((state) => state.loginRed.loginedIn);
  const events = useSelector((state) => state.eventsRed.events);
  const dispatch = useDispatch();

  const registeredEvents = events.filter((event) =>
    event.registeredIDs?.includes(id)
  );

  useEffect(() => {
    const handleFetchEvents = async () => {
      const fetchedEvents = await fetchEvents();
      dispatch(addEventsAction(fetchedEvents));
    };
    handleFetchEvents();
  }, []);

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
});

export default Dashboard;
