import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddTransaction from "./AddTransaction";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="mb-4">
      <h3>Balance tracker</h3>
      <Button onClick={() => setIsOpen(true)}>Add Transaction</Button>
      <AddTransaction open={isOpen} close={handleModalClose} />
    </div>
  );
}

export default Header;
