import { useEffect, useState } from "react";
import api from "./axios";

const usePokemons = (apiPokemons) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const response = await api(apiPokemons);
            setPokemons(response.data);
        };
        getPokemons();
    }, [apiPokemons]);
    return pokemons;
};

const useAttibutes = (apiAttributes) => {
    const [attributes, setAttributes] = useState([]);

    useEffect(() => {
        const getAttributes = async () => {
            const response = await api(apiAttributes);
            setAttributes(response.data);
        };
        getAttributes();
    }, [apiAttributes]);
    return attributes;
};

const useColor = (apiColor) => {
    const [color, setColor] = useState([]);

    useEffect(() => {
        const getColor = async () => {
            const response = await api(apiColor);
            setColor(response.data);
        };
        getColor();
    }, [apiColor]);
    return color;
};

const useEvolution = (apiEvolution) => {
    const [evolutions, setEvolutions] = useState([]);

    useEffect(() => {
        const getEvolution = async () => {
            const response = await api(apiEvolution);
            setEvolutions(response.data);
        };
        getEvolution();
    }, [apiEvolution]);
    return evolutions;
};

const apiObjects = {
    usePokemons,
    useAttibutes,
    useColor,
    useEvolution
}

export default apiObjects;