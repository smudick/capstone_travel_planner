import axios from 'axios';

const yelpUrl = 'https://api.yelp.com/v3/businesses/search';

const yelpQuery = (location, term) => new Promise((resolve, reject) => {
  axios
    .get(`${'https://cors-anywhere.herokuapp.com/'}${yelpUrl}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
      },
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
