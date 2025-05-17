import { PlaylistService } from "../../services/playlistService"
import AlbumSection from "./AlbumSection"

const Dashboard = () => {    
    return(
        <div className="h-full bg-[#121212] p-10 flex">
            <AlbumSection title="Trending" fetchData={PlaylistService.getTrendingPlaylist}/>
        </div>
    )
}

export default Dashboard