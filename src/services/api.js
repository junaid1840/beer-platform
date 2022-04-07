import axios from "axios";

export const getAllBeers = async () => {
    const { data } = await axios.get("https://api.punkapi.com/v2/beers");
    return data;
}

export const getFilteredBeers = async (filterQuery) => {
    const { data } = await axios.get(`https://api.punkapi.com/v2/beers?${filterQuery}`);
    return data;
}