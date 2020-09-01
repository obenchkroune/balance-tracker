import React, { useContext } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalContext";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const expenseStyles = {
    borderRight: "4px solid #dc3545",
  };

  const incomeStyles = {
    borderRight: "4px solid #28a745",
  };

  return (
    <ListGroup.Item
      style={transaction.ammount < 0 ? expenseStyles : incomeStyles}
      className="d-flex align-items-center justify-content-between mb-2 shadow-sm"
    >
      <span>{transaction.title}</span>
      <span>
        {transaction.ammount < 0 ? "-" : "+"}${Math.abs(transaction.ammount)}
        <Button
          onClick={() => deleteTransaction(transaction.id)}
          size="sm"
          variant="danger"
          className="ml-2"
        >
          delete
        </Button>
      </span>
    </ListGroup.Item>
  );
}

export default Transaction;
