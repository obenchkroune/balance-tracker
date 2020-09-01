import React from "react";
import { Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const ammounts = transactions.map((transaction) => transaction.ammount);

  const income = ammounts
    .filter((ammount) => ammount > 0)
    .reduce((prev, curr) => (prev += curr), 0)
    .toFixed(2);
  const expenses =
    ammounts
      .filter((ammount) => ammount < 0)
      .reduce((prev, curr) => (prev += curr), 0) * -(1).toFixed(2);

  return (
    <div
      className="bg-white shadow py-4 text-center bold"
      style={{ fontSize: "1.3rem", fontWeight: "600" }}
    >
      <Row>
        <Col md={6} className="border-right">
          INCOME
          <p className="text-success m-0">+${income}</p>
        </Col>
        <Col md={6}>
          EXPENCES
          <p className="text-danger m-0">${expenses}</p>
        </Col>
      </Row>
    </div>
  );
}

export default IncomeExpenses;
