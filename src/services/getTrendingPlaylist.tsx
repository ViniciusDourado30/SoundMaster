import audiusAPI from "../api/axiosInstanceAudiusAPI";

const getTrendingPlaylist = async () => {
    try {
        const response = await audiusAPI.get("/playlists/trending");

        console.log(response.data.data)
        return response.data.data[0];
    } catch (error) {
        console.log("Falha")
    }
}

export default getTrendingPlaylist;