import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/'
})

export const fetchCoins = async () => {
    const res = await api.get('coins/markets', {
        params: {
            order: 'market_cap_desc',
            vs_currency: 'EUR',
            per_page: 10
        }
    });
    return res.data;
}

export const fetchCoinById = async (id: string) => {
    const res = await api.get(`coins/${id}`)
    return res.data;
}