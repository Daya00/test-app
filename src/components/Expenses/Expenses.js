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

    const filteredExpense = props.items.filter(a => {
        return a.date.getFullYear().toString() === filteredYear;
    })

    let expenseContent = <p>No record found..</p>;
    if (filteredExpense.length > 0) {
        expenseContent = filteredExpense.map(a => <ExpenseItems key={a.id} title={a.title} amount={a.amount} date={a.date} />);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenseContent}
        </Card>
    )
}

export default Expense;