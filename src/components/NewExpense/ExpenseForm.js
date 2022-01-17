import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, SetEnteredTitle] = useState('')
    const [enteredAmount, SetEnteredAmount] = useState('')
    const [enteredDate, SetEnteredDate] = useState('')
    const titleChangeHandler = (event) => {
        SetEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        SetEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        SetEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        debugger;
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        SetEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate('');
    } 

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" stop="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" stop="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__control">
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    )
}
export default ExpenseForm;