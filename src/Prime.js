import React, { useState } from "react";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './prime.css';

const PrimeComponent = () => {
    const [num, setNum] = useState('');
    const [result, setResult] = useState([]);


    const handleInputChange = (event) =>{
        setNum(event.target.value);
    };

    const isPrime = (n) => {
        for (let m = 2; m <= Math.sqrt(n); m++)
            if (n % m === 0)
                return false;
        return true;
    };




    const getNextPrimeNumber = (val) => {
        if(val <= 1) {
            return 2;
        }
        let b = val + 1;
        for (b; ; b++) {
            if (b === 2 || isPrime(b)) {
                break;
            }
        }
        return b;
    };
    const handleButtonClick = () =>{
        const r = [];
        const firstPrimeNumbersArray = [];
        let secondPrimeNumbersArray = [];
        for(let i=1; i<=Number(num); i++) {
            const n = firstPrimeNumbersArray.length ? firstPrimeNumbersArray[firstPrimeNumbersArray.length -1] : i;
            const firstNumber = getNextPrimeNumber(n);
            firstPrimeNumbersArray.push(firstNumber);
            secondPrimeNumbersArray = [];
            for (let j=1; j<=Number(num); j++) {
                const n1 = secondPrimeNumbersArray.length ? secondPrimeNumbersArray[secondPrimeNumbersArray.length -1] : j;
                const secondNumber = getNextPrimeNumber(n1);
                secondPrimeNumbersArray.push(secondNumber);
                r.push(Number(firstNumber) + Number(secondNumber));
            }
        };
        setResult(r);
    };



    return (
        <Container className='app-container'>
            <h3 className='header-title'>Prime App</h3>
            <div className='app-form'>
                <label htmlFor="num">Enter Number</label>
                <input
                    type="text"
                    placeholder='Enter a number'
                    className="form-control"
                    id="num"
                    value={num}
                    onChange={(e) =>handleInputChange(e)}
                />
                <button onClick={handleButtonClick} type="submit" className="btn btn-success">Click to get Prime Number Table </button>
            </div>
            <div className='result-div'>
                {
                    result.length ? <h4>{`Result is: ${result.join(',')}`}</h4> : null
                }
            </div>
        </Container>
    );
};
export default PrimeComponent;