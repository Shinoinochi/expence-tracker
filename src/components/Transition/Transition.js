import React from 'react';
import { GlobalContext } from '../../context/GlobalState';
function Transaction({ transaction }) {
  const { deleteTransaction } = React.useContext(GlobalContext);
  function removeTransaction() {
    deleteTransaction(transaction.id);
  }
  return (
    <li className={transaction.cost >= 0? `tracker__history-item tracker__history-item_income`: `tracker__history-item tracker__history-item_expence`}>
      <p className='tracker__history-name'>{transaction.name}</p>
      <span className={transaction.cost >= 0? `tracker__cost tracker__cost_income`: `tracker__cost tracker__cost_expence`}>
        {transaction.cost}₽
      </span>
      <img src={transaction.category} className='tracker__category-icon' alt='category icon'></img>
      <button className='tracker__button-delete' onClick={removeTransaction}>X</button>
    </li>
  );
}

export default Transaction;