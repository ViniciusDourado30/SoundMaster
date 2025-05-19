import type { musicType } from "../../../types/musicType"

interface TrackCardProp{
    data: musicType,
}

const MusicCard = ({data} : TrackCardProp) => {

    return(
        <div className="w-full h-16 border-4 border-[#191919] rounded-lg flex justify-between p-1 gap-4">
            <img src={data.artwork["1000x1000"]} alt="" className="w-12 rounded"/>
            <div className="w-full h-full flex flex-col justify-end">
                <label className="text-white font-semibold text-sm">{data.title}</label>
                <p className="text-[#eaeaea] font-light text-sm line-clamp-1">{data.name}</p>
                <audio controls src={`https://discoveryprovider.audius.co/v1/tracks/${data.id}/stream`} />
            </div>
        </div>
    )
}

export default MusicCard