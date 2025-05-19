export interface musicType{
    id: string,
    title: string,
    description: string,
    artwork: {
        '150x150'?: string,
        '480x480'?: string,  
        '1000x1000'?: string,
    }
    name: string,
}