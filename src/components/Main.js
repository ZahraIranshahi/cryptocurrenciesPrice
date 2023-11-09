import React, { useState, useEffect } from "react";
import { getCoin } from "../services/api";
import Loading from "./Loading";
import Coin from "./Coin";
import styles from "./Main.module.css";

const Main = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchAPI = () => {
      const data = getCoin();
      setCoins(data);
    };
    fetchAPI();
  }, []);
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
    <div className={styles.container}>
      <input className={styles.input}
        type="text"
        placeholder=" Search"
        value={search}
        onChange={searchHandler}
      />
      {coins.length ? (
        <div className={`${searchedCoins.length && styles.coins}`} >
          {searchedCoins.map((coin) => (
            <Coin
              key={coin.id}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              currentPrice={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
    </>
  );
};

export default Main;
