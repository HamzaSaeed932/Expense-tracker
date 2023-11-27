import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpense = () => {

  const {transactions} =useContext(GlobalContext)


  const income=transactions.filter((item)=>(item.amount > 0)).reduce((acc,init)=>acc +=init.amount,0);
  const expense=Math.abs(transactions.filter((item)=>item.amount < 0).reduce((acc,ini)=>(acc+=ini.amount),0))

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">${expense}</p>
        </div>
      </div>)
}

export default IncomeExpense