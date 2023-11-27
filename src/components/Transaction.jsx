import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {
  const {handleDelete} = useContext(GlobalContext)
    let sign = transaction.amount > 0 ?'+':'-';
  return (
    <li className={sign === '+'?'plus':'minus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={()=>(handleDelete(transaction.id))}>x</button>
        </li> 
  )
}

export default Transaction