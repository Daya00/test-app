import Card from "./Card";
import ExpenseItems from "./ExpenseItems";
import './Expenses.css';

const Expense = (props) => {     
    return(       
        <Card className="expenses">
{props.items.map(a => <ExpenseItems title={a.title} amount={a.amount} date={a.date} />)}        
        </Card>
    )
}

export default Expense;