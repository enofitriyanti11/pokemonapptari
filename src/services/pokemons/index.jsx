import { client } from "../axios";

export const getPokemon = () => client({
    method: "GET",
    url: "/pokemon",
});

export const getPokemonName = (name) => client({
    method: "GET",
    url: `/pokemon/${name}`,
});