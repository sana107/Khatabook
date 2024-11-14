import React from "react";

const Dashboard = ({transactions}) => {
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

    const expence = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

    const Balance = transactions.reduce((p, c) => p + c.amount, 0);


  return (
    <div className="row g-3 my-3">
      <div className="col-sm-12 col-md-4">
        <div className="card p-3 rounded-0 bg-success text-light">
          <h1 className="display-6">Income:</h1>
          <h1 className="display-1">{income}</h1>
        </div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="card p-3 rounded-0 bg-warning text-light">
          <h1 className="display-6">Balance:</h1>
          <h1 className="display-1">{Balance}</h1>
        </div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="card p-3 rounded-0 bg-danger text-light">
          <h1 className="display-6">Expence:</h1>
          <h1 className="display-1">{expence}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
