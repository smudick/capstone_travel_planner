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

export default { saveSearchResults };
