import React from 'react';
import Transaction from '../Transition/Transition';
import shop from '../../images/shopping-bag-svgrepo-com.svg'
import play from '../../images/play-svgrepo-com.svg'
import home from '../../images/home-house-svgrepo-com.svg'
import busIcon from '../../images/bus-svgrepo-com.svg'
import medIcon from '../../images/emergency-health-healthcare-hospital-kit-medical-svgrepo-com.svg'
import booksIcon from '../../images/books-book-svgrepo-com.svg'
import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = ({sorted, setSorted}) => {
  const { transactions } = React.useContext(GlobalContext);

  function resetSort() {
    setSorted(null);
  }
  function sortLess(evt) {
    setSorted(transactions.filter(transaction => transaction.cost < 0));
  }

  function sortGreater(evt) {
    setSorted(transactions.filter(transaction => transaction.cost > 0));
  }

  function sortIcon(evt) {
    switch(evt.target.name) {
      case 'shop': setSorted(transactions.filter(transaction => transaction.category === `${document.location.origin}${shop}`));
          break;
      case 'play': setSorted(transactions.filter(transaction => transaction.category === `${document.location.origin}${play}`)); 
          break;
      case 'home': setSorted(transactions.filter(transaction => transaction.category === `${document.location.origin}${home}`));
          break;
      case 'transport': setSorted(transactions.filter(transaction => transaction.category === `${document.location.origin}${busIcon}`));
          break;
      case 'med': setSorted(transactions.filter(transaction => transaction.category === `${document.location.origin}${medIcon}`));
          break;
      case 'books': setSorted(transactions.filter(transaction => transaction.category === `${document.location.origin}${booksIcon}`));
          break;
      default: break;
    }
  }

  return (
    <>
      <div className='tracker__history'>
        <h3 className='tracker__subtitle'>История</h3>
        <div className='tracker__sort'>
          <button className='tracker__button' onClick={resetSort}>Сбросить</button>
          <button className='tracker__button' onClick={sortGreater}>Доходы</button>
          <button className='tracker__button' onClick={sortLess}>Расходы</button>
          <div className='tracker__category'>
                <label>
                    <button type='radio' className='tracker__radio' name='category' ></button>
                    <img className='tracker__icon' alt='category' name='shop' src={shop} onClick={sortIcon} ></img>
                </label>
                <label>
                    <button type='radio' className='tracker__radio' name='category'></button>
                    <img className='tracker__icon' alt='category' name='play' src={play} onClick={sortIcon}></img>
                </label>
                <label>
                    <button type='radio' className='tracker__radio' name='category'></button>
                    <img className='tracker__icon' alt='category' name='home' src={home} onClick={sortIcon}></img>
                </label>
                <label>
                    <button type='radio' className='tracker__radio' name='category'></button>
                    <img className='tracker__icon' alt='category' name='transport' src={busIcon} onClick={sortIcon}></img>
                </label>
                <label>
                    <button type='radio' className='tracker__radio' name='category'></button>
                    <img className='tracker__icon' alt='category' name='med' src={medIcon} onClick={sortIcon}></img>
                </label>
                <label>
                    <button type='radio' className='tracker__radio' name='category'></button>
                    <img className='tracker__icon' alt='category' name='books' src={booksIcon} onClick={sortIcon}></img>
                </label>
            </div>
        </div>
        <ul className="tracker__history-list">
          {sorted? sorted.map(transaction => (<Transaction key={transaction.id} resetSort={resetSort} transaction={transaction} />)) : transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
        </ul>
      </div>
    </>
  )
}