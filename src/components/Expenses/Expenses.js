import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
    const [filteredYear, setfilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setfilteredYear(selectedYear);
    }

    const filteredExpense = props.items.filter(a => {
        return a.date.getFullYear().toString() === filteredYear;
    })


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpense} />
        </Card>
    )
}

export default Expense;