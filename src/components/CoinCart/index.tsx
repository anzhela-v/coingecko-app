import { Card } from "antd/lib";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons/lib";
import styles from "./CoinCart.module.scss";
import { Item } from "@/interfaces";

interface Props {
  item: Item;
}

function CoinCart({ item }: Props) {
  return (
    <Card bordered={false}>
      <Link href={`/coins/${item.id}`}>
        <div className={styles.card}>
          <Image src={item.image} width={60} height={60} alt={item.name} />
          <div className={styles.coinInfo}>
            <div>
              <h3 className={styles.coinName}>
                {item.name} <span>({item.symbol})</span>
              </h3>
              <p className={styles.rateChanges}>
                <span className={styles.highRate}>
                  <CaretUpOutlined /> {item.high_24h}
                </span>
                <span className={styles.lowRate}>
                  <CaretDownOutlined /> {item.low_24h}
                </span>
              </p>
            </div>
            <h3>{item.current_price}</h3>
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default CoinCart;
