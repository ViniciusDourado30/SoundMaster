import audiusAPI from "./api/axiosInstanceAudiusAPI"
import discoveryProviderAudiusAPI from "./api/axiosInstanceDiscoveryProviderAudius";

export const TrackService = {
    getTrack: async () => {
        try {
            const response = await discoveryProviderAudiusAPI.get('/tracks/pz85lmX');
            console.log(response.data.data)
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }
}
