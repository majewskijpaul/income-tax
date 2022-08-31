import React from 'react'
import "./TaxInfo.css"

function TaxInfo() {


    const federal = [{key: 0, value: 0}, {key: 50197, value: 0.15}, {key: 100392, value: 0.205}, {key: 155625, value: 0.26}, {key: 221708, value: 0.29}, {key: 221708, value: 0.33}];

    for (let i = 1; i < federal.length; i++){
        if (i === 1) console.log("You pay " + federal[i].value*100 + "% for the first $" + federal[i].key);
        else if (i === federal.length - 1) console.log("You pay " + federal[i].value*100 + "% for everything after $" + federal[i].key);
        else console.log("You pay " + federal[i].value*100 + "% for any earnings between $ " + federal[i-1].key + " and $ " + federal[i].key);
    }

  return (
    <div className="taxinfo">
        <h4>Canada, like most countries, has a marginal tax rate. After certain thresholds are reached, you are only taxed for the amount after said threshold</h4>
    </div>
  )
}

export default TaxInfo