import { type BackdropColorsType, type PokeTypesColorType } from "./types"

export const backdropColors: Record<BackdropColorsType, string> = {
    'black': '#000000',
    'blue': '#2F9AFF',
    'brown': '#A0522D',
    'gray': '#808080',
    'green': '#78CD54',
    'pink': '#FFACFF',
    'purple': '#7866EF',
    'red': '#FF421C',
    'white': '#FFFFFF',
    'yellow': '#FFCD30'
}

export const pokeTypeColors: Record<PokeTypesColorType, string> = {
    'normal': '#BCBCAC',
    'fighting': '#BC5442',
    'flying': '#669AFF',
    'poison': '#AB549A',
    'ground': '#DEBC54',
    'rock': '#BCAC66',
    'bug': '#ABBC1C',
    'ghost': '#6666BC',
    'steel': '#ABACBC',
    'fire': '#FF421C',
    'water': '#2F9AFF',
    'grass': '#78CD54',
    'electric': '#FFCD30',
    'psychic': '#FF549A',
    'ice': '#78DEFF',
    'dragon': '#7866EF',
    'dark': '#785442',
    'fairy': '#FFACFF',
    'shadow': '#0E2E4C'
}