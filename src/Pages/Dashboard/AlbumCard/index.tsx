import { useEffect, useState } from "react";
import { PlaylistService } from "../../../services/playlistService";
import type { TrendingPlaylist } from "../../../types/trendingPlaylistType";

const AlbumCard = () => {

    const [trendingPlaylist, setTrendingPlaylist] = useState<TrendingPlaylist>()

      useEffect(() => {
        const getData = async () => {
            const data = await PlaylistService.getTrendingPlaylist();
            setTrendingPlaylist(data);
            console.log(data)
        };
        getData();
    }, []);

    return(
    <div className="w-36 min-w-36 h-36 min-h-36 rounded-xl bg-cover border-2 border-[#191919] cursor-pointer relative overflow-hidden" style={{ backgroundImage: `url(${trendingPlaylist?.artwork["1000x1000"]  })` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative w-full h-full flex justify-end p-3 flex-col">
            <h1 className="text-white font-medium">{trendingPlaylist?.playlist_name}</h1>
            <p className="text-white text-sm font-light line-clamp-1 hover:line-clamp-none">{trendingPlaylist?.description}</p>
        </div>
    </div>
    )
}

export default AlbumCard;