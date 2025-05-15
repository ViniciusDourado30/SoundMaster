import type { Album } from "./trendingPlaylistType";

export interface SectionType{
    title: string,
    fetchData: () => Promise<Album[]>
}