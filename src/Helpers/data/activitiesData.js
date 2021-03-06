import axios from 'axios';
import joinTableData from './joinTableData';

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

const getSavedActivities = (city, userId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/activities.json?orderBy="userId"&equalTo="${userId}"`).then((response) => {
      const allActivities = Object.values(response.data);
      const cityActivities = [];
      allActivities.forEach((act) => {
        if (act.city === city) {
          cityActivities.push(act);
        }
      });
      resolve(cityActivities);
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

const deleteActivities = (firebaseKey) => axios.delete(`${baseUrl}/activities/${firebaseKey}.json`)
  .then(() => {
    axios.get(`${baseUrl}/scheduledActivities.json?orderBy="activityId"&equalTo="${firebaseKey}"`)
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  saveSearchResults, getSavedActivities, deleteActivities, editActivity,
};
