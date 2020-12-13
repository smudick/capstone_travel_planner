import axios from 'axios';

const baseUrl = 'https://travel-planner-7b38c-default-rtdb.firebaseio.com';

const createScheduledActivity = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/scheduledActivities.json`, obj)
    .then((response) => {
      axios.patch(`${baseUrl}/scheduledActivities/${response.data.name}.json`, { firebaseKey: response.data.name })
        .then((patchResponse) => {
          resolve(patchResponse);
        }).catch((error) => reject(error));
    });
});

const getScheduledActivities = (itineraryId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/scheduledActivities.json?orderBy="itineraryId"&equalTo="${itineraryId}"`).then((response) => {
      const itineraryActivities = Object.values(response.data);
      resolve(itineraryActivities);
    })
    .catch((error) => reject(error));
});

const removeScheduledActivities = (joinTableId) => axios.delete(`${baseUrl}/scheduledActivities/${joinTableId}.json`);

export default {
  createScheduledActivity, getScheduledActivities, removeScheduledActivities,
};
