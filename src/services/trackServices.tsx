
import type { playlistContent } from "../types/playlistContent";
import discoveryProviderAudiusAPI from "./api/axiosInstanceDiscoveryProviderAudius";

export const TrackService = {
    getTracksByPlaylist: async (tracksIds: playlistContent[]) => {
        try {
            const response = await Promise.all(
                tracksIds.map(async (track) => {
                    const data = await discoveryProviderAudiusAPI.get(`/tracks/${track.track_id}`);
                    console.log(data);
                     return {
      id: data.data.data.id,
      title: data.data.data.title,
      description: data.data.data.description,
      artwork: data.data.data.artwork,
      name: data.data.data.user.name,
    };
                })
            )
            return (response);
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}
