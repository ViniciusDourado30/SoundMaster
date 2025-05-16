import axios from "axios";

const discoveryProviderAudiusAPI = axios.create({
        baseURL: "https://discoveryprovider.audius.co/v1",
    });

export default discoveryProviderAudiusAPI;