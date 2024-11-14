import React, { useState } from "react";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "salary",
      amount: 50000,
    },
    {
      id: 2,
      text: "rent",
      amount: 5000,
    },
  ]);

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  const removeTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  const addTransaction = (text, amount) => {
    setTransactions([
      { id: crypto.randomUUID(), text, amount: parseInt(amount) },
      ...transactions,
    ]);
  };

  const editTransaction = (transaction) => {
    setEdit({
      transaction: transaction,
      isEdit: true,
    });
  };

  const updateTransaction = (updatedtransaction) => {
    setTransactions(
      transactions.map((itrm) =>
        item.id === updatedtransaction.id ? updatedtransaction : item
      )
    );
    setEdit({ transaction: {}, isEdit: false });
  };

  return (
    <>
      <Navbar />
      <div className="container p-5 ">
        <Form addTransaction={addTransaction} edit={edit} updateTransaction={updateTransaction}/>
        <Dashboard transactions={transactions} />
        <ListGroup
          transactions={transactions}
          removeTransaction={removeTransaction}
          editTransaction={editTransaction}
        />
      </div>
    </>
  );
};

export default App;
