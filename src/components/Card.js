import React from 'react'
import { useStateValue } from '../StateProvider';
import "./Card.css";
import CurrencyFormat from 'react-currency-format';

function Card({id, province, rate, salary, federalTax, provincialTax, grossIncome}) {
  const [{card}, dispatch] = useStateValue();

  const removeFromPanel = () => {
    dispatch({
      type: "REMOVE_CARD",
      id: id,
    });
  };



  return (
    <div className="card">
      <div className="province">
        <strong className="cardprovince">{province}</strong>
      </div>
      <div className="taxes">
        <div className="cardsalary">Salary: <CurrencyFormat className="province" value={salary} displayType={'text'} decimalScale={2} thousandSeparator={true} prefix={'$'} /></div>
        <div className="cardfederal">Federal: <CurrencyFormat className="province" value={federalTax} displayType={'text'} decimalScale={2} thousandSeparator={true} prefix={'$'} /></div>
        <div className="cardprovincial">Provincial: <CurrencyFormat className="province" value={provincialTax} displayType={'text'} decimalScale={2} thousandSeparator={true} prefix={'$'} /></div>
        <div className="cardgross">Gross: <CurrencyFormat className="province" value={grossIncome} displayType={'text'} decimalScale={2} thousandSeparator={true} prefix={'$'} /></div>
      </div>
        <button className="remove" onClick={removeFromPanel}>Unpin</button>
    </div>
  )
}

export default Card