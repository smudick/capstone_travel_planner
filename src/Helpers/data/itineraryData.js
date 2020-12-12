import axios from 'axios';

const baseUrl = 'https://travel-planner-7b38c-default-rtdb.firebaseio.com';

const getItineraries = (userId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/itineraries.json?orderBy="userId"&equalTo="${userId}"`).then((response) => {
      const allItins = Object.values(response.data);
      resolve(allItins);
    })
    .catch((error) => reject(error));
});

const createItinerary = (itinObj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/itineraries.json`, itinObj)
    .then((response) => {
      axios.patch(`${baseUrl}/itineraries/${response.data.name}.json`, { firebaseKey: response.data.name })
        .then((patchResponse) => {
          resolve(patchResponse);
        }).catch((error) => reject(error));
    });
});

export default { getItineraries, createItinerary };
