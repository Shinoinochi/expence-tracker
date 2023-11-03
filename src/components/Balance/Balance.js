import React from 'react'
import { GlobalContext } from '../../context/GlobalState';
function Balance() {
    const { transactions } = React.useContext(GlobalContext);
    
    const total = transactions.map(transaction => Number(transaction.cost));
    const expence = total.filter((item) => (item < 0), 0).reduce((acc, item) => (acc + item), 0);
    const income = total.filter((item) => (item > 0), 0).reduce((acc, item) => (acc + item), 0);
    const balance = total.reduce((acc, item) => (acc + item), 0);

  return (
        <>  
        <div className='tracker__balance-block'>
            <div>
                <h2 className='tracker__balance-title'>Баланс:</h2>
                <span className='tracker__balance tracker__money'>{balance}₽</span>
            </div>
                <div className='tracker__income'>
                    <p className='tracker__income-title'>Доходы:</p>
                    <p className='tracker__income-total tracker__money'>+{income}₽</p>
                </div>
                <div className='tracker__expence'>
                    <p className='tracker__expence-title'>Расходы:</p>
                    <p className='tracker__expence-total tracker__money'>{expence}₽</p>
                </div>
        </div>
        </>
  );
}

export default Balance;