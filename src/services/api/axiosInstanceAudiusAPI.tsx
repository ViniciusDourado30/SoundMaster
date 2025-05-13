import axios from "axios";

const audiusAPI = axios.create({
        baseURL: "https://api.audius.co/v1",
    });

export default audiusAPI;