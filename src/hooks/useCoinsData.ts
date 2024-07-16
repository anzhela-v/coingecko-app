import { fetchCoins } from '@/services/coins';
import { useQuery } from '@tanstack/react-query';

export const useCoinsData = () => {
    return useQuery({
       queryKey: ['coins'],
       queryFn: fetchCoins,
    })
}