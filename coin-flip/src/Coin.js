import React from "react";


/** renders an image with two props
 * props:
 * -src
 * -alt
 *
 * state: none
 *
 * CoinFlip -> Coin
 */
function Coin({ src, side }) {
  return (
    <div className="Coin">
      <img src={src} alt={side} />
    </div>
  );
}

export default Coin;