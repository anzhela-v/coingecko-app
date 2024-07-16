import { useCoinData } from "@/hooks/useCoinData";
import { Spin, Card } from "antd/lib";
import { useRouter } from "next/router";
import React from "react";
import styles from "./coins.module.scss";

function Coin() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useCoinData(id as string);

  if (!id || isLoading) return <Spin fullscreen size="large" />;

  if (error) return <div>Error fetching coin</div>;

  return (
    <Card>
      <div className={styles.coin}>
        <h1 className={styles.coinName}>
          {data.name}
          <span>({data.symbol})</span>
        </h1>
        <p>{data.hashing_algorithm}</p>
        <p className={styles.coinDescription}>{data.description.en}</p>

        <p>{data.market_data?.market_cap?.eur}</p>
        <h4>{data.genesis_date} </h4>

        <a href={data.links.homepage[0]}>{data.links.homepage}</a>
      </div>
    </Card>
  );
}

// TODO: Implement unit tests

export default Coin;
