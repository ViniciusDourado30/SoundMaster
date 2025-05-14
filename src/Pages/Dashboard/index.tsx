import AlbumCard from "./AlbumCard"

const Dashboard = () => {    
    return(
        <div className="h-full bg-[#121212] p-10 flex">
            <section className="w-full h-fit">
                <label className="static text-1xl font-bold uppercase text-[#eaeaea]">Trending</label>
                <div className="w-full h-fit flex gap-3 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                    <AlbumCard/></div>
            </section>
        </div>
    )
}

export default Dashboard