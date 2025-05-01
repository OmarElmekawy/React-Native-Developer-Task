import axios from "axios";

export function handleSignup(email, password) {
  axios.post(
    "https://680fae3567c5abddd1963bbd.mockapi.io/api/event/Authenticate",
    {
      email,
      password,
    }
  );
}

export async function handleLogin(email, password) {
  const response = await axios.get(
    `https://680fae3567c5abddd1963bbd.mockapi.io/api/event/Authenticate?email=${email}&password=${password}`
  );

  return response.data;
}

export async function fetchEvents() {
  const response = await axios.get(
    "https://680fae3567c5abddd1963bbd.mockapi.io/api/event/events"
  );
  return response.data;
}

export async function addUserToRegisteredIDs(eventId, newUserId) {
  const response = await axios.get(
    `https://680fae3567c5abddd1963bbd.mockapi.io/api/event/events/${eventId}`
  );

  const event = response.data;

  const existingIDs = event.registeredIDs || [];
  const updatedIDs = existingIDs.includes(newUserId)
    ? existingIDs
    : [...existingIDs, newUserId];

  const updateResponse = await axios.put(
    `https://680fae3567c5abddd1963bbd.mockapi.io/api/event/events/${eventId}`,
    {
      registeredIDs: updatedIDs,
    }
  );

  return updateResponse.data;
}
