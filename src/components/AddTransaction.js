import React, { useState, useContext } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../context/GlobalContext";

function AddTransaction({ open, close }) {
  const [title, setTitle] = useState("");
  const [ammount, setAmmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      title,
      ammount: parseInt(ammount),
    };

    addTransaction(newTransaction);
    setTitle("");
    setAmmount("");
    close();
  };

  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>
        <h3>New Transaction</h3>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>title:</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Text..."
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>ammount:</Form.Label>
            <Form.Control
              onChange={(e) => setAmmount(e.target.value)}
              type="number"
              value={ammount}
            />
          </Form.Group>
          <Button type="submit" block variant="info">
            Add transaction
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddTransaction;
