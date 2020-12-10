import axios from 'axios';

const baseUrl = 'https://travel-planner-7b38c-default-rtdb.firebaseio.com/';

const saveSearchResults = (resultObj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/activities.json`, resultObj)
    .then((response) => {
      axios.patch(`${baseUrl}/activities/${response.data.name}.json`, { firebaseKey: response.data.name })
        .then((patchResponse) => {
          resolve(patchResponse);
        }).catch((error) => reject(error));
    });
});

const getSavedActivities = (city) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/activities.json?orderBy="city"&equalTo="${city}"`).then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

const editActivity = (actObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseUrl}/activities/${actObj.firebaseKey}.json`, actObj)
    .then((response) => {
      resolve(response);
    }).catch((error) => reject(error));
});

const deleteActivities = (firebaseKey) => axios.delete(`${baseUrl}/activities/${firebaseKey}.json`);

export default {
  saveSearchResults, getSavedActivities, deleteActivities, editActivity,
};
