import { useEffect, useState } from "react";
import getTrendingPlaylist from "../../../services/getTrendingPlaylist";

interface TrendingPlaylist{
    artwork: {
        '1000x1000'?: string,
    }
    description: string,
};

const AlbumCard = () => {

    const [trendingPlaylist, setTrendingPlaylist] = useState<TrendingPlaylist>()

      useEffect(() => {
        const getData = async () => {
            const data = await getTrendingPlaylist();
            setTrendingPlaylist(data);
            console.log(data)
        };
        getData();
    }, []);

    return(
    <div className="w-36 h-36 rounded bg-cover bg-red-500" style={{ backgroundImage: `url(${trendingPlaylist?.artwork["1000x1000"]})` }}></div>
    )
}

export default AlbumCard;