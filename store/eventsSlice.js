import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
  name: "events",
  initialState: { events: [] },
  reducers: {
    addEvents: (state, actions) => {
      state.events = actions.payload;
    },
    addRegisterUser: (state, actions) => {
      const { data, eventID } = actions.payload;

      const eventIndex = state.events.findIndex(
        (event) => event.id === eventID
      );

      state.events[eventIndex] = data;
    },
  },
});

export default eventsSlice.reducer;

export const addEventsAction = eventsSlice.actions.addEvents;
export const registerEventsAction = eventsSlice.actions.addRegisterUser;
