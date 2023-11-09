import React from 'react';
import styles from "./Coin.module.css";

const Coin = ({image , name , symbol , currentPrice , marketCap , priceChange}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgAndName}>
            <img src={image} alt={name} className={styles.image}/>
            <p className={styles.name}> {name} </p>
            </div>
            <p className={styles.symbol}> {symbol.toUpperCase()} </p>
            <p className={styles.currentPrice}> ${currentPrice.toLocaleString()} </p>
            <p className={`${priceChange > 0 ? styles.priceChangePositive : styles.priceChangeNegative}`}> {priceChange}% </p>
            <p> ${marketCap.toLocaleString()} </p>
        </div>
    );
};

export default Coin;