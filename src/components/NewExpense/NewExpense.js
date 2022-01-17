import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            name_d:"Dayanand Singh"
        }
        props.onAddExpense(expenseData);
        console.log(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;