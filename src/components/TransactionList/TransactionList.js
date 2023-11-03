import React from 'react';
import Transaction from '../Transition/Transition';

import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = React.useContext(GlobalContext);

  return (
    <>
      <div className='tracker__history'>
        <h3 className='tracker__subtitle'>История</h3>
        <ul className="tracker__history-list">
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
        </ul>
      </div>
    </>
  )
}