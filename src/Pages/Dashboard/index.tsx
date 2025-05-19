import { PlaylistService } from "../../services/playlistService"
import AlbumSection from "./AlbumSection"

const Dashboard = () => {    
    return(
        <div className="h-full bg-[#121212] px-10 py-15  flex">
            <AlbumSection title="Trending" fetchData={PlaylistService.getTrendingPlaylist}/>
        </div>
    )
}

export default Dashboard