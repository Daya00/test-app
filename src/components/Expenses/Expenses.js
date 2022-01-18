import Card from "./Card";
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import { useState } from "react";

const Expense = (props) => {
    const [filteredYear, setfilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setfilteredYear(selectedYear);
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map(a => <ExpenseItems key={a.id} title={a.title} amount={a.amount} date={a.date} />)}
        </Card>
    )
}

export default Expense;