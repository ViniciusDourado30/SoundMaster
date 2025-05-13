import AlbumCard from "./AlbumCard"

const Dashboard = () => {    
    return(
        <div className="h-full bg-[#121212] p-10 flex">
            <section className="w-full">
                <label className="text-1xl font-bold uppercase text-[#eaeaea]">Trending</label>
                <AlbumCard/>
            </section>
        </div>
    )
}

export default Dashboard