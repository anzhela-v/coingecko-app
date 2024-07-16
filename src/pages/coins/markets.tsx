import { useCoinsData } from "@/hooks/useCoinsData";
import { Spin, Row, Col } from "antd/lib";
import React from "react";
import styles from "./coins.module.scss";
import CoinCart from "@/components/CoinCart";

function CoinsMarkets() {
  const { data, isLoading, error } = useCoinsData();

  if (isLoading) {
    return <Spin fullscreen size="large" />;
  }
  if (error) {
    return <div>Error fetching coins</div>;
  }

  return (
    <section className={styles.coinsMarketsWrapper}>
      <h1>Coins Markets</h1>
      <div className={styles.coinsMarkets}>
        <Row gutter={[16, 16]}>
          {data?.map((item) => (
            <Col xs={24} xl={8} key={item.id}>
              <CoinCart item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default CoinsMarkets;
