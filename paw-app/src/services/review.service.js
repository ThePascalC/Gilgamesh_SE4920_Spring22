import axios from 'axios';
const API_URL = "http://localhost:8080/api/";
class ReviewService {
    createReview(park_id, quality, population, rating) {
      return axios.post(API_URL + "review", {
        park_id,
        quality,
        population,
        rating
      })
      .then(response => {
          console.log(response)
      })
      .catch((error) => console.log( error.response.request.response ));
    }
    
  }
  export default new ReviewService();