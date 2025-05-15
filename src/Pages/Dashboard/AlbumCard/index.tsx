import type { Album } from "../../../types/trendingPlaylistType";

interface AlbumCardProp{
    album: Album,
}

const AlbumCard = ({album} : AlbumCardProp) => {

        return(
          <div className="w-36 min-w-36 h-36 min-h-36 rounded-xl bg-cover border-2 border-[#191919] cursor-pointer relative overflow-hidden" style={{ backgroundImage: `url(${album.artwork["1000x1000"]})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative w-full h-full flex justify-end p-3 flex-col">
            <h1 className="text-white font-medium line-clamp-1 hover:line-clamp-none">{album.playlist_name}</h1>
            <p className="text-white text-sm font-light line-clamp-1 hover:line-clamp-5 ">{album.description}</p>
        </div>
    </div>
    )
}

export default AlbumCard;