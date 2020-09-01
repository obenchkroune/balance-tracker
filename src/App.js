import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="mx-auto col-lg-5 mt-4">
        <Container>
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
        </Container>
      </div>
    </GlobalProvider>
  );
}

export default App;
