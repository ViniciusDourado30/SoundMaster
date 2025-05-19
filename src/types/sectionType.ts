import type { Album } from "./albumType";

export interface SectionType{
    title: string,
    fetchData: () => Promise<Album[]>
}