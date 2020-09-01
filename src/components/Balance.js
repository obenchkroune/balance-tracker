import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const ammounts = transactions.map((transaction) => transaction.ammount);

  const total = ammounts
    .reduce((preAmmount, currAmmount) => (preAmmount += currAmmount), 0)
    .toFixed(2);

  return (
    <div className="my-3">
      <strong>YOUR BALANCE</strong>
      <h1 className="display-4">${total}</h1>
    </div>
  );
}

export default Balance;
