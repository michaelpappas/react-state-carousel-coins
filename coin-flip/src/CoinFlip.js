import React, { useState } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";

const defaultProps = {
  coins: [{ src: "/coinHeads.jpg", side: "heads" },
  { src: "/coinTails.png", side: "tails" }]
};

/** renders an image with two props
 * props:
 * - coins
 * state:
 * - currCoin
 * - headCount
 * - tailCount
 *
 * App -> CoinFlip -> Coin
 */
function CoinFlip(props) {
  const [currCoin, setCurrCoin] = useState(null);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  function handleClick() {
    const nextCoin = choice(props.coins);
    setCurrCoin(nextCoin);

    if (nextCoin.side === "heads") {
      setHeadCount(headCount + 1);
    } else {
      setTailCount(tailCount + 1);
    }
  }

  const currentCoinDisplay = currCoin ? <Coin side={currCoin.side} src={currCoin.src} /> : null;

  return (
    <div className="CoinFlip">
      <h1>Let's Flip a Coin!</h1>
      {currentCoinDisplay}
      <button onClick={handleClick}>Flip Me!</button>
      <p> Out of {headCount + tailCount} flips, there have been {headCount} heads and {tailCount} tails. </p>

    </div>
  );
}
CoinFlip.defaultProps = defaultProps;



export default CoinFlip;