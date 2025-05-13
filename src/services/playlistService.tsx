import type { TrendingPlaylist } from "../types/trendingPlaylistType";
import audiusAPI from "./api/axiosInstanceAudiusAPI"

export const PlaylistService = {
    getTrendingPlaylist: async () => {
        try {
            const response = await audiusAPI.get('/playlists/trending');
            return response.data.data[0];
        } catch (error) {
            console.log(error);
        }
    }
}