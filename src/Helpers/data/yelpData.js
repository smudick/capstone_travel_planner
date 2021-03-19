import axios from 'axios';

const yelpUrl = '/functions/get-yelp';

const yelpQuery = (location, term) => new Promise((resolve, reject) => {
  axios
    .get({ yelpUrl }, {
      params: {
        location: `${location}`,
        term: `${term}`,
      },
    }).then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

export default yelpQuery;
