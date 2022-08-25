import React, { useState, useEffect } from 'react'

function Form() {

    const [province, setProvince] = useState("")
    const [salary, setSalary] = useState(0);
    const [rate, setRate] = useState("yearly");
    const [federalTax, setFederalTax] = useState(0);
    const [provincialTax, setProvincialTax] = useState(0);
    const [grossIncome, setGrossIncome] = useState(0);
    const [items, setItems] = useState([]);

    const federal = [{key: 0, value: 0}, {key: 50197, value: 0.15}, {key: 100392, value: 0.205}, {key: 155625, value: 0.26}, {key: 221708, value: 0.29}, {key: 221708, value: 0.33}]
    const alberta = [{key: 0, value: 0}, {key: 131220, value: 0.10}, {key: 157464, value: 0.12}, {key: 209952, value: 0.13}, {key: 314928, value: 0.14}, {key: 314928, value: 0.15},]
    const britishcolumbia = [{key: 0, value: 0}, {key: 43070, value: 0.0506}, {key: 86141, value: 0.077}, {key: 98901, value: 0.105}, {key: 120094, value: 0.1229}, {key: 162832, value: 0.147}, {key: 227091, value: 0.168}, {key: 227091, value: 0.205}]
    const manitoba = [{key: 0, value: 0}, {key: 34431, value: 0.108}, {key: 74416, value: 0.1275}, {key: 74416, value: 0.174}]
    const nfl = [{key: 0, value: 0}, {key: 39147, value: 0.087}, {key: 78294, value: 0.145}, {key: 139780, value: 0.158}, {key: 195693, value: 0.178}, {key: 250000, value: 0.198}, {key: 500000, value: 0.208}, {key: 1000000, value: 0.213}, {key: 1000000, value: 0.218}]
    const newbrunswick = [{key: 0, value: 0}, {key: 44887, value: 0.094}, {key: 89775, value: 0.1482}, {key: 145955, value: 0.1652}, {key: 166280, value: 0.1784}, {key: 166280, value: 0.203}]
    const nwt = [{key: 0, value: 0}, {key: 45462, value: 0.059}, {key: 90927, value: 0.086}, {key: 147826, value: 0.122}, {key: 147826, value: 0.1405}]
    const novascotia = [{key: 0, value: 0}, {key: 29590, value: 0.0879}, {key: 59180, value: 0.1495}, {key: 93000, value: 0.1667}, {key: 150000, value: 0.175}, {key: 150000, value: 0.21}]
    const nunavut = [{key: 0, value: 0}, {key: 47862, value: 0.04}, {key: 95724, value: 0.07}, {key: 155625, value: 0.09}, {key: 155625, value: 0.115}]
    const ontario = [{key: 0, value: 0}, {key: 46226, value: 0.0505}, {key: 92454, value: 0.0915}, {key: 150000, value: 0.1116}, {key: 220000, value: 0.1216}, {key: 220000, value: 0.1316}]
    const pei = [{key: 0, value: 0}, {key: 31984, value: 0.098}, {key: 63969, value: 0.138}, {key: 63969, value: 0.167}]
    const quebec = [{key: 0, value: 0}, {key: 45105, value: 0.15}, {key: 90200, value: 0.20}, {key: 109755, value: 0.24}, {key: 109755, value: 0.2575}]
    const saskatchewan = [{key: 0, value: 0}, {key: 46773, value: 0.105}, {key: 133638, value: 0.125}, {key: 133638, value: 0.145}]
    const yukon = [{key: 0, value: 0}, {key: 50197, value: 0.064}, {key: 100392, value: 0.09}, {key: 155625, value: 0.109}, {key: 500000, value: 0.128}, {key: 500000, value: 0.15}]

    const calculateTax = (list, salary) => {
        let total = 0;
        let taxable;
        for (let i = 1; i < list.length; i++) {
            if (salary <= list[i].key || i === list.length-1) {
                taxable = salary - list[i-1].key;
                total = total + taxable * list[i].value;
                break;
            }
            else {
                taxable = list[i].key - list[i-1].key
                total = total + taxable * list[i].value;
            }
        }
        return total
    }
    
    // {salary: salary, province: getProvinceName(province), rate: rate, federalTax: federalTax, provincialTax: provincialTax, grossIncome: grossIncome}
    
    useEffect(() => {
        setSalary(salary);
        setProvince(province);
        setRate(rate);
        setFederalTax((calculateTax(federal, getAnnualSalary(rate)).toFixed(2)));
        setProvincialTax(calculateProvincialTax(province));
        setGrossIncome(((getAnnualSalary(rate) - calculateTax(federal, getAnnualSalary(rate) - calculateProvincialTax(province))).toFixed(2)))
    }, [salary, province, rate])
    
    const list = [];
    const handleClick = () => {
        const newlist = {salary: salary, province: getProvinceName(province), rate: rate, federalTax: federalTax, provincialTax: provincialTax, grossIncome: grossIncome}
        list.push(newlist);
        console.log(list)
    }


    // console.log(federalTax, provincialTax)
    const getAnnualSalary = (rate) => {
        if (rate === "monthly") return salary*12
        else if (rate === "biweekly") return salary*26
        else if (rate === "weekly") return salary*52
        else if (rate === "hourly") return salary*2080
        else return salary
    }

    const getProvinceName = (province) => {
        if (province === "ab") return ("Alberta");
        else if (province === "bc") return ("British Columbia")
        else if (province === "mn") return ("Manitoba")
        else if (province === "nf") return ("Newfoundland and Labrador")
        else if (province === "nb") return ("New Brunswick")
        else if (province === "nw") return ("Northwest Territories")
        else if (province === "ns") return ("Nova Scotia")
        else if (province === "nv") return ("Nunavut")
        else if (province === "on") return ("Ontario")
        else if (province === "pe") return ("Prince Edward Island")
        else if (province === "qc") return ("Québec")
        else if (province === "sk") return ("Saskatchewan")
        else if (province === "yk") return ("Yukon")
        else return null
    }

    const calculateProvincialTax = (province) => {
        if (province === "ab") {
            return calculateTax(alberta, getAnnualSalary(rate))
        } 
        else if (province === "bc") {
            return calculateTax(britishcolumbia, getAnnualSalary(rate))
        }
        else if (province === "mn") {
            return calculateTax(manitoba, getAnnualSalary(rate))
        }
        else if (province === "nf") {
            return calculateTax(nfl, getAnnualSalary(rate))
        }
        else if (province === "nb") {
            return calculateTax(newbrunswick, getAnnualSalary(rate))
        }
        else if (province === "nw") {
            return calculateTax(nwt, getAnnualSalary(rate))
        }
        else if (province === "ns") {
            return calculateTax(novascotia, getAnnualSalary(rate))
        }
        else if (province === "nv") {
            return calculateTax(nunavut, getAnnualSalary(rate))
        }
        else if (province === "on") {
            return calculateTax(ontario, getAnnualSalary(rate))
        }
        else if (province === "pe") {
            return calculateTax(pei, getAnnualSalary(rate))
        }
        else if (province === "qc") {
            return calculateTax(quebec, getAnnualSalary(rate))
        }
        else if (province === "sk") {
            return calculateTax(saskatchewan, getAnnualSalary(rate))
        }
        else if (province === "yk") {
            return calculateTax(yukon, getAnnualSalary(rate))
        }
    }

  return (
    <div>
            Select your Province/Territory:
            <select default="Select" onChange={e => setProvince(e.target.value)}>
                <option value="" selected disabled hidden>Province/Territory</option>
                <option value="ab">Alberta</option>
                <option value="bc">British Columbia</option>
                <option value="mn">Manitoba</option>
                <option value="nf">Newfoundland and Labrador</option>
                <option value="nb">New Brunswick</option>
                <option value="nw">Northwest Territories</option>
                <option value="ns">Nova Scotia</option>
                <option value="nv">Nunavut</option>
                <option value="on">Ontario</option>
                <option value="pe">Prince Edward Island</option>
                <option value="qc">Québec</option>
                <option value="sk">Saskatchewan</option>
                <option value="yk">Yukon</option>
            </select>
            Enter your Salary:
            <input type="number" value={salary} onChange={e => setSalary(e.target.value)} />
            <select onChange={e => setRate(e.target.value)}>
                <option default value="yearly">Yearly</option>
                <option value="monthly">Monthly</option>
                <option value="biweekly">Bi-Weekly</option>
                <option value="weekly">Weekly</option>
                <option value="hourly">Hourly</option>
            </select>
        <div>
            {getAnnualSalary(rate) === 0 ? <h3>Enter your current salary</h3> : <h3>Your current annual salary: ${getAnnualSalary(rate)}</h3>}
            {getProvinceName(province) === null ? <h3>Select your Province</h3> : <h3>In the Province of: {getProvinceName(province)}</h3>}
            {rate === null ? null : <h3>While being paid: {rate}</h3>}
            {salary === 0 ? null : <h3>You pay ${(calculateTax(federal, getAnnualSalary(rate))).toFixed(2)} in Federal Taxes</h3>}
            {getProvinceName(province) === null ? null : <h3>You pay ${(calculateProvincialTax(province)).toFixed(2)} in Provincial Taxes</h3>}
            {getProvinceName(province) === null ? null : <h3>Your Total Taxes: ${(+calculateTax(federal, getAnnualSalary(rate)) + +calculateProvincialTax(province)).toFixed(2)}</h3>}
            {getProvinceName(province) === null ? null : <h3>Your gross income is: ${(getAnnualSalary(rate) - calculateTax(federal, getAnnualSalary(rate)) - calculateProvincialTax(province)).toFixed(2)}</h3>}
        </div>
        <button onClick={() => handleClick()}>Save Information</button>
    </div>
  )
}
export default Form