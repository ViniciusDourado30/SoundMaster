import axios from "axios";

const jamendoAPI = axios.create({
    baseURL: "https://api.jamendo.com/v3.0",
    params: {
        client_id: "2cf45a34",
        format: "json",
    }
})

export default jamendoAPI;
