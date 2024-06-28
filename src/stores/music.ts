import { defineStore } from "pinia"
import { TArtist } from "src/components/models"
import { ref } from "vue"

export const useMusicStore = defineStore("music", () => {
  const selectedCard = ref<TArtist | undefined>()
  const data: TArtist[] = [
    {
      id: 0,
      artist: "Metallica",
      genre: "metal",
      albums: [
        {
          artist: "Metallica",
          name: "Death Magnetic",
          year: "2008",
          albumId: 0,
          songs: [
            {
              name: "That Was Just Your Life",
              albumId: 0,
              id: 0,
            },
            {
              name: "The End of the Line",
              albumId: 0,
              id: 1,
            },
          ],
        },
        {
          artist: "Metallica",
          name: "Hardwired...To Self-Destruct",
          year: "2016",
          albumId: 1,
          songs: [
            {
              name: "Hardwired",
              albumId: 1,
              id: 0,
            },
            {
              name: "	Atlas, Rise!",
              albumId: 1,
              id: 1,
            },
            {
              name: "Now That We're Dead",
              albumId: 1,
              id: 2,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      artist: "Aerosmith",
      genre: "hardrock",
      albums: [
        {
          artist: "Aerosmith",
          name: "Just Push Play",
          year: "2001",
          albumId: 0,
          songs: [
            {
              name: "Beyond Beautiful",
              albumId: 0,
              id: 0,
            },
            {
              name: "Just Push Play",
              albumId: 0,
              id: 1,
            },
          ],
        },
        {
          artist: "Aerosmith",
          name: "Honkin' on Bobo",
          year: "2004",
          albumId: 1,
          songs: [
            {
              name: "Road Runner",
              albumId: 1,
              id: 0,
            },
            {
              name: "Shame, Shame, Shame!",
              albumId: 1,
              id: 1,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      artist: "Scorpions",
      genre: "rock",
      albums: [
        {
          artist: "Scorpions",
          name: "Humanity: Hour I",
          year: "2007",
          albumId: 0,
          songs: [
            {
              name: "Hour I",
              albumId: 0,
              id: 0,
            },
            {
              name: "The Game of Life",
              albumId: 0,
              id: 1,
            },
          ],
        },
        {
          artist: "Scorpions",
          name: "Sting in the Tail",
          year: "2010",
          albumId: 1,
          songs: [
            {
              name: "Raised on Rock",
              albumId: 1,
              id: 0,
            },
            {
              name: "Sting In the Tail",
              albumId: 1,
              id: 1,
            },
          ],
        },
      ],
    },
  ]
  return { data, selectedCard }
})
