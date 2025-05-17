import { useLocation } from "react-router";
import SideBarRight from "../../components/SideBarRight";
import type { Album } from "../../types/trendingPlaylistType";

const PlaylistPage = () => {

     const location = useLocation();
     const albumData = location.state.album as Album;

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
            </main>
            <aside>
                <SideBarRight/>
            </aside>
         </div>
    )
}

export default PlaylistPage;