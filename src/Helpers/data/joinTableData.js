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

export default { createScheduledActivity };
