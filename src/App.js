import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  { id: 'e1', title: 'Playstation', amount: 94.12, date: new Date(2022, 12, 24) },
  { id: 'e2', title: 'TV', amount: 799.49, date: new Date(2020, 11, 14) },
  { id: 'e3', title: 'Car', amount: 11294.67, date: new Date(2021, 7, 29) },
  { id: 'e4', title: 'New Desk', amount: 450, date: new Date(2019, 2, 18) },
  { id: 'e5', title: 'Bamba', amount: 4, date: new Date(2022, 2, 18) },
  { id: 'e6', title: 'Bisli', amount: 2, date: new Date(2022, 4, 8) },
];


const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  // return React.createElement('div', {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses }))

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
