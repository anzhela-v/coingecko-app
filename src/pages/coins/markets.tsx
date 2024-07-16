import { useCoinsData } from '@/hooks/useCoinsData';
import Image from 'next/image';
import React from 'react';

function CoinsMarkets () {    
    const { data, isLoading, error } = useCoinsData();    
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching coins</div>;

    return <div>
        {data.map(item=><li key={item.id}>
            <Image src={item.image} width={100} height={100} alt={item.name} />
            <p>{item.name} {item.symbol} {item.current_price} {item.high_24h} {item.low_24h}</p></li>)}
    </div>

}

export default CoinsMarkets;