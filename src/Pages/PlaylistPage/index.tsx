import { useLocation } from "react-router";
import SideBarRight from "../../components/SideBarRight";
import type { Album } from "../../types/albumType";
import MusicCard from "./MusicCard";
import { useEffect, useState } from "react";
import { TrackService } from "../../services/trackServices";
import type { musicType } from "../../types/musicType";

const PlaylistPage = () => {

     const location = useLocation();
     const albumData = location.state.album as Album;

     const [Tracks, setTracks] = useState<musicType[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await TrackService.getTracksByPlaylist(albumData.playlist_contents);
            setTracks(data);
            console.log(data);
        }
        getData();
    }, []);

    return(
         <div className="h-full bg-[#121212] flex">
            <main className="w-full m-10">
                <section className="w-full h-4/12 flex border-b-2 border-[#eaeaea]">
                <div className="w-1/5 h-full flex p-5">
                <img src={albumData.artwork["1000x1000"]} alt="Playlist Image" className="rounded-xl min-w-full min-h-full"/>
                </div>
                <div className="flex flex-col justify-end h-full py-5 w-4/5 gap-4">
                    <h1 className="text-4xl font-bold text-white uppercase">{albumData.playlist_name}</h1>
                    {albumData.description !== "" ? (<p className="text-sm font-extralight text-[#eaeaea]">{albumData.description}</p>) : (<p className="">Não Existe Descrição</p>)}
                </div>
            </section>
            <section className="w-full h-full p-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent flex flex-col gap-4">
                {Tracks && Tracks.map((tracks) => {
                   return <MusicCard key={tracks.id} data={tracks}/> 
                })}
            </section>
            </main>
            <aside>
                <SideBarRight/>
            </aside>
         </div>
    )
}

export default PlaylistPage;