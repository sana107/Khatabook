import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({transactions ,addTransaction, removeTransaction ,editTransaction}) => {
  return (
    <>
    <h1 className='display-6'> transactions</h1>

    <ul className="list-group my-3">
       {transactions.map((transaction) => 
        <ListItem  key ={transaction.id} transaction={transaction} removeTransaction={removeTransaction} addTransaction={addTransaction} editTransaction={editTransaction}/> 
       )}
    </ul>
    </>
  )
}

export default ListGroup
