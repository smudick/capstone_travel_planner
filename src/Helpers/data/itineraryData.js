import axios from 'axios';
import joinTableData from './joinTableData';

const baseUrl = 'https://travel-planner-7b38c-default-rtdb.firebaseio.com';

const getItineraries = (userId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/itineraries.json?orderBy="userId"&equalTo="${userId}"`).then((response) => {
      const allItins = Object.values(response.data);
      resolve(allItins);
    })
    .catch((error) => reject(error));
});

const getSingleItinerary = (id) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/itineraries.json?orderBy="firebaseKey"&equalTo="${id}"`).then((response) => {
      resolve(response.data);
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

const deleteItinerary = (firebaseKey) => axios.delete(`${baseUrl}/itineraries/${firebaseKey}.json`)
  .then(() => {
    axios.get(`${baseUrl}/scheduledActivities.json?orderBy="itineraryId"&equalTo="${firebaseKey}"`)
      .then((response) => {
        const responseArray = Object.values(response);
        responseArray.forEach((respArr) => {
          const scheduledActivitiesIdsArray = Object.keys(respArr);
          scheduledActivitiesIdsArray.forEach((id) => {
            joinTableData.removeScheduledActivities(id);
          });
        });
      });
  });

export default {
  getItineraries, createItinerary, deleteItinerary, getSingleItinerary,
};
