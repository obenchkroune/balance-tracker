import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalContext";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="my-3">
      <h3>History</h3>
      <hr />

      <ListGroup style={{ fontWeight: "600" }}>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ListGroup>
    </div>
  );
}

export default TransactionList;
