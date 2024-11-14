import React, { useCallback, useEffect, useState } from "react";

const Form = ({ addTransaction, edit, updateTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit ? updateTransaction ({id:edit.transaction.id, text , amount:parseInt(amount)}): addTransaction(text,amount);
    setText("");
    setAmount("");
  };

  useEffect(() => {
    setAmount(edit.transaction.amount);
    setText(edit.transaction.text);
  }, [edit]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        required="required"
        placeholder="enter transaction"
        className="form-control rounded-0 my-3"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <input
        type="number"
        required="required"
        placeholder="enter amount"
        className="form-control rounded-0 my-3"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button className="btn btn-success rounded-0 w-100">save</button>
    </form>
  );
};

export default Form;
