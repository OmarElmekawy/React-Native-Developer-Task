import { FlatList, View, StyleSheet } from "react-native";

import EventItem from "../componants/eventItem";

import { useSelector } from "react-redux";
import { GlobalColors } from "../constants/colors";

function EventList() {
  const events = useSelector((state) => state.eventsRed.events);

  function eventlistrenderItem(itemData) {
    return <EventItem {...itemData.item} />;
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={eventlistrenderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default EventList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalColors.primary400,
  },
});

//
