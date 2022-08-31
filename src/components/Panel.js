import React from 'react'
import { useStateValue } from '../StateProvider';
import Card from './Card';
import "./Panel.css";

function Panel() {
    const [{card}, dispatch] = useStateValue();

  return (
    <div>
        <h3 className="title">Pinned</h3>
        {card.map((item) => (
            <Card 
                id={item.id}
                province={item.province === null ? null : item.province}
                rate={item.rate}
                salary={item.salary}
                federalTax={item.federalTax}
                provincialTax={item.provincialTax === NaN ? null : item.provincialTax}
                grossIncome={item.grossIncome === "NaN" ? item.salary-item.federalTax : item.grossIncome}
            />
        ))}
    </div>
  )
}

export default Panel