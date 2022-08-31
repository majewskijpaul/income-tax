import React from 'react'
import "./Info.css"


function Info() {
  return (
    <div className="infotext">
        <h1 className="welcome">Welcome to the Income Tax calculator.</h1>
        <h3 className="information info1">This app will calculate your Federal and Provincial income tax. Start by selecting your Province and Salary.</h3>
        <h3 className="information info2">You can also save and pin your results to compare and contrast your findings.</h3>
    </div>
  )
}

export default Info