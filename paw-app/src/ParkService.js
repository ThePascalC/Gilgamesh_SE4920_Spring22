import axios from "axios";

const PARKS_REST_API_URL = "http://localhost:8080/api/users";


class ParkService {
    getParks(){
        return axios.get(PARKS_REST_API_URL);
    }
}

export default new ParkService();