
import Input from './components/Input';
import Button from './components/Button';

import { Container, Row } from './styles';
import { useState } from 'react';


const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');
    
    const handleOnClear = () => {
        setCurrentNumber('0')
        setFirstNumber('0')
        setOperation('')
    };
    
    const handleOnClearError = () => {
        setCurrentNumber('0')
    };
    
    const handleAddNumber = (num) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    }
    
    const handleAddDigit = () => {
        setCurrentNumber(prev => `${prev}.`)
    }
    
    const handleSumNumbers = (perc = false) => {
        
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('+')
        }
        else {
            if (perc) {
                const sum = Number(firstNumber) + (Number(firstNumber) * Number(currentNumber) / 100);
                setCurrentNumber(String(sum))
            }
            else {
                const sum = Number(firstNumber) + Number(currentNumber);
                setCurrentNumber(String(sum))
            }
            
            setOperation('')
        }
        
    }
    
    const handleMinusNumbers = (perc = false) => {
        
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('-')
        }
        else {
            if (perc) {
                const minus = Number(firstNumber) - (Number(firstNumber) * Number(currentNumber) / 100);
                setCurrentNumber(String(minus))
            }
            else {
                const minus = Number(firstNumber) - Number(currentNumber);
                setCurrentNumber(String(minus))
            }

            setOperation('')
        }
        
    }
    
    const handleMultiplyNumbers = (perc = false) => {
        
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('X')
        }
        else {
            if (perc) {
                const mul = Number(firstNumber) * (Number(firstNumber) * Number(currentNumber) / 100);
                setCurrentNumber(String(mul))
            }
            else {
                const mul = Number(firstNumber) * Number(currentNumber);
                setCurrentNumber(String(mul))
            }
            setOperation('')
        }
    }
    
    const handleDivideNumbers = (perc = false) => {
        
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('/')
        }
        else {
            if (Number(currentNumber) === 0) {
                setCurrentNumber('0')
                setOperation('')
            }
            else {
                if (perc) {
                    const div = Number(firstNumber) / (Number(firstNumber) * Number(currentNumber) / 100);
                    setCurrentNumber(String(div))
                }
                else {
                    const div = Number(firstNumber) / Number(currentNumber);
                    setCurrentNumber(String(div))
                }
                setOperation('')
            }
        }
    }
    
    const handlePercent = () => {
        if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
            switch(operation){
                case '+':
                    handleSumNumbers(true);
                    break;
                case '-':
                    handleMinusNumbers(true);
                    break;
                case 'X':
                    handleMultiplyNumbers(true);
                    break;
                case '/':
                    handleDivideNumbers(true);
                    break;
                default: 
                break;
            }
        }
    }
    
    const handleNegNumber = () => {
        if (currentNumber !== '0') {
            setCurrentNumber(prev => prev.includes('-') ? prev.replace('-', '') : `-${prev}`)
        }
    }
    
    const handleEquals = () => {
        
        if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
            switch(operation){
                case '+':
                    handleSumNumbers();
                    break;
                case '-':
                    handleMinusNumbers();
                    break;
                case 'X':
                    handleMultiplyNumbers();
                    break;
                case '/':
                    handleDivideNumbers();
                    break;
                default: 
                break;
            }
        }
    }
    
    return (
        <Container>
            <Input value={currentNumber}/>
            <Row>
                <Button label="CE" onClick={handleOnClearError}/>
                <Button label="C" onClick={handleOnClear}/>
                <Button label="%" onClick={handlePercent}/>
                <Button label="/" onClick={handleDivideNumbers}/>
            </Row>

            <Row>
                <Button label="7" onClick={() => handleAddNumber('7')}/>
                <Button label="8" onClick={() => handleAddNumber('8')}/>
                <Button label="9" onClick={() => handleAddNumber('9')}/>
                <Button label="X" onClick={handleMultiplyNumbers}/>
            </Row>

            <Row>
                <Button label="4" onClick={() => handleAddNumber('4')}/>
                <Button label="5" onClick={() => handleAddNumber('5')}/>
                <Button label="6" onClick={() => handleAddNumber('6')}/>
                <Button label="-" onClick={handleMinusNumbers}/>
            </Row>

            <Row>
                <Button label="1" onClick={() => handleAddNumber('1')}/>
                <Button label="2" onClick={() => handleAddNumber('2')}/>
                <Button label="3" onClick={() => handleAddNumber('3')}/>
                <Button label="+" onClick={handleSumNumbers}/>
            </Row>

            <Row>
                <Button label="+/-" onClick={handleNegNumber}/>
                <Button label="0" onClick={() => handleAddNumber('0')}/>
                <Button label="." onClick={handleAddDigit}/>
                <Button label="=" onClick={handleEquals}/>
            </Row>
        </Container>
    );
}
    
export default App;
    