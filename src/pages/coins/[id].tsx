import { useCoinData } from '@/hooks/useCoinData';
import { useRouter } from 'next/router';
import React from 'react';

function Coin () {    
     const router = useRouter();
     const { id } = router.query;
    const { data, isLoading, error } = useCoinData(id as string);

    if (!id || isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching coin</div>;

    return <div>
        {/* {data.map(item=><li><p>{item.name} {item.symbol} {item.hashing_algorithm} {item.description} {item.market_cap.eur} {item.low_24h} {item.genesis_date} {item.links.homepage}</p></li>)} */}
    </div>

}

export default Coin;