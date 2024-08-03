import axios from "axios";

// const FetchAPI = (endpoint) => {

//     const options = {
//         method: "GET",
//         url: `https://bayut.p.rapidapi.com/${endpoint}`,
//         headers: {
//             "x-rapidapi-key": '199a5377bamshbf56a625f4bb08cp1eb6ccjsna473732e7348',
//             "x-rapidapi-host": "bayut.p.rapidapi.com",
//         }
//     };

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchAPI = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '199a5377bamshbf56a625f4bb08cp1eb6ccjsna473732e7348',
        },
    });

    return data;
}