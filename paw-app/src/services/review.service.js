import axios from 'axios';
const API_URL = "http://localhost:8080/api/";
class ReviewService {
    createReview(park_id, quality, population, rating) {
      return axios.post(API_URL + "review", {
        park_id,
        quality,
        population,
        rating
      });
    }
  }
  export default new ReviewService();