import React from 'react'
import { GlobalProvider } from '../context/GlobalState';
import AddTransaction from './Transition/AddTransition/AddTransition';
import { TransactionList } from './TransactionList/TransactionList';
import Balance from './Balance/Balance';
function ExpenseTracker() {
  const [sorted, setSorted] = React.useState(null);
  return (
    <GlobalProvider>
        <main className='tracker'>
            <h1 className='tracker__title'>Отслеживание расходов</h1>
            <div className='tracker__block'>
                <Balance/>
                <AddTransaction sorted={sorted} setSorted={setSorted}/>
            </div>
            <TransactionList sorted={sorted} setSorted={setSorted}/>

        </main>
    </GlobalProvider>
  );
}

export default ExpenseTracker;