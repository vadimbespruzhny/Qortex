export type TSong = {
  name: string
  albumId: number
  id: number
}

export type TAlbum = {
  artist: string
  name: string
  year: string
  albumId: number
  songs: TSong[]
}

export type TArtist = {
  id: number
  artist: string
  genre: string
  albums: TAlbum[]
}
