import { useEffect, useState } from "react";
import type { Album } from "../../../types/trendingPlaylistType";
import type { SectionType } from "../../../types/sectionType";
import AlbumCard from "../AlbumCard";

const AlbumSection = ({title, fetchData} : SectionType) => {

    const [trendingPlaylist, setTrendingPlaylist] = useState<Album[]>([]);

        useEffect(() => {
            const getData = async () => {
                const data = await fetchData();
            setTrendingPlaylist(data);
            console.log(data)
        };
        getData();
    }, [fetchData]);

    return(
        <section className="w-full h-fit">
                <label className="static text-1xl font-bold uppercase text-[#eaeaea]">{title}</label>
                <div className="w-full h-fit flex gap-3 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                    {trendingPlaylist && trendingPlaylist.map((album) => {
                        return <AlbumCard key={album.id} album={album}/>
                    })}
                </div>
            </section>
    )
};

export default AlbumSection;