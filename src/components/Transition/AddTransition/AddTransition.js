import React from 'react'
import { GlobalContext } from '../../../context/GlobalState';
import shop from '../../../images/shopping-bag-svgrepo-com.svg'
import play from '../../../images/play-svgrepo-com.svg'
import home from '../../../images/home-house-svgrepo-com.svg'
import busIcon from '../../../images/bus-svgrepo-com.svg'
import medIcon from '../../../images/emergency-health-healthcare-hospital-kit-medical-svgrepo-com.svg'
import booksIcon from '../../../images/books-book-svgrepo-com.svg'
import { initialState } from '../../../context/GlobalState';

function AddTransaction({sorted, setSorted}) {
    const { transactions } = React.useContext(GlobalContext);
    const { addTransaction } = React.useContext(GlobalContext);
    const date = new Date();
    const [name, setName] = React.useState('');
    const [cost, setCost] = React.useState(0);
    const [ category, setCategory ] = React.useState(document.location.origin + shop);
    function onSubmitTransiction(evt) {
        evt.preventDefault();
        const day = date.getDate();
        const mounth = date.getMonth() + 1;
        const year = date.getFullYear();
        const todayDate = day + '.' + mounth + '.' + year;
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            name: name,
            cost: cost,
            category: category,
            date: todayDate
        }
        addTransaction(newTransaction);
        setName('');
        setCost(0);
        setSorted(null);
    }

    React.useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    return (
        <>
        <form className='tracker__form' onSubmit={onSubmitTransiction}>
            <label className='tracker__label'>Добавление новой транзакции</label>
            <label className='tracker__label'>Имя</label>
            <input className='tracker__input' required value={name} onInput={evt => setName(evt.target.value)}></input>
            <label className='tracker__label'>Сумма</label>
            <input className='tracker__input' required type='number' value={cost} onInput={evt => setCost(evt.target.value)}></input>
            <label className='tracker__label'>Категория</label>
            <div className='tracker__category'>
                <label>
                    <input type='radio' className='tracker__radio' defaultChecked name='category' ></input>
                    <img className='tracker__icon' alt='category' src={shop} onClick={evt => setCategory(evt.target.src)} ></img>
                    
                </label>
                <label>
                    <input type='radio' className='tracker__radio' name='category'></input>
                    <img className='tracker__icon' alt='category' src={play} onClick={evt => setCategory(evt.target.src)}></img>
                
                </label>
                <label>
                    <input type='radio' className='tracker__radio' name='category'></input>
                    <img className='tracker__icon' alt='category' src={home} onClick={evt => setCategory(evt.target.src)}></img>
                </label>
                <label>
                    <input type='radio' className='tracker__radio' name='category'></input>
                    <img className='tracker__icon' alt='category' src={busIcon} onClick={evt => setCategory(evt.target.src)}></img>
                </label>
                <label>
                    <input type='radio' className='tracker__radio' name='category'></input>
                    <img className='tracker__icon' alt='category' src={medIcon} onClick={evt => setCategory(evt.target.src)}></img>
                </label>
                <label>
                    <input type='radio' className='tracker__radio' name='category'></input>
                    <img className='tracker__icon' alt='category' src={booksIcon} onClick={evt => setCategory(evt.target.src)}></img>
                </label>
            </div>
            <button className='tracker__button'>Добавить</button>
        </form>
        </>
    );
}

export default AddTransaction;