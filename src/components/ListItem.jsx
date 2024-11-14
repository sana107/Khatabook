import React from "react";

const ListItem = ({ transaction, removeTransaction,editTransaction }) => {
  return (
    < li  className={transaction.amount >0 ? "list-group-item rounded-0 text-success ": "list-group-item text-danger"}>
      <h1 className="display-5">{transaction.text}:{transaction.amount}</h1>
      <span className="float-end">
        <button
          className="btn btn-sm btn-danger rounded-0 mx-3 my-3"
          onClick={() => removeTransaction(transaction.id)}
        >
          Delete
        </button>
        <button className="btn btn-sm btn-warning rounded-0" onClick={(e)=>editTransaction(transaction )}> edit</button>
      </span>
    </li>
  );
};

export default ListItem;
