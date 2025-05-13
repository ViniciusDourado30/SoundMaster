import axios from "axios";

const audiusAPI = axios.create({
    baseURL: "https://api.audius.co/v1/",
    headers: {
    'Content-Type': 'application/json',
    },
});

export default audiusAPI;