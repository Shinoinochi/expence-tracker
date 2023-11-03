import React from 'react'
import { GlobalProvider } from '../context/GlobalState';
import AddTransaction from './Transition/AddTransition/AddTransition';
import { TransactionList } from './TransactionList/TransactionList';
import Balance from './Balance/Balance';
function ExpenseTracker() {

  return (
    <GlobalProvider>
        <main className='tracker'>
            <h1 className='tracker__title'>Отслеживание расходов</h1>
            <div className='tracker__block'>
                <Balance/>
                <AddTransaction/>
            </div>
            <TransactionList/>

        </main>
    </GlobalProvider>
  );
}

export default ExpenseTracker;