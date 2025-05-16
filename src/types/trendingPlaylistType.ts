import type { playlistContent } from "./playlistContent"

export interface Album{
    id: string,
    artwork: {
        '150x150'?: string,
        '480x480'?: string,  
        '1000x1000'?: string,
    }
    description: string,
    playlist_name: string,
    playlist_contents: playlistContent[],
}