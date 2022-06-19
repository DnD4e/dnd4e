import { defineStore } from "pinia";
import { Character, generateNewCharacter } from "../models/interfaces/character";



export const characterStore = defineStore('character', {
    state: () => ({
        character : generateNewCharacter() as Character
    }),
})