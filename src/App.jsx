import { useState } from 'react'
import AddButton from './components/AddButton'
import FirstOperand from './components/FirstOperand'
import SecondOperand from './components/SecondOperand'
import SubtractButton from './components/SubtractButton'
import MultipButton from './components/MultipButton'
import DivisionButton from './components/DivisionButton'
import ResultInput from './components/ResultInput'



function App() {
const [firstvalue, setFirstvalue] = useState("")
const [secondvalue, setSecondvalue] = useState("")
const [result, setResult] = useState("");

    function getFirstvalue(e){
        setFirstvalue(e.target.value);
    }
    function getSecondvalue(e){
      setSecondvalue(e.target.value);
  }

  function addValues (){
    console.log(firstvalue);
    console.log(secondvalue);
  if (!isNaN(firstvalue)&& !isNaN(secondvalue)){
    setResult(parseFloat(firstvalue) + parseFloat(secondvalue))
  }
  if (firstvalue=="" || secondvalue==""){
    setResult("Empty input!")
  }
  }

  function subtractValues(){
    if (!isNaN(firstvalue) && !isNaN(secondvalue)){
      setResult(parseFloat(firstvalue)-parseFloat(secondvalue))
    }
    if (firstvalue=="" || secondvalue==""){
      setResult("Empty input!")
    }
  }

  function multiplyValues(){
    if (!isNaN(firstvalue) && !isNaN(secondvalue)){
      setResult(parseFloat(firstvalue)*parseFloat(secondvalue))
    }
    if (firstvalue=="" || secondvalue==""){
      setResult("Empty input!")
    }
  }
  function divideValues(){
    if (!isNaN(firstvalue) && !isNaN(secondvalue)){
      setResult(parseFloat(firstvalue)/parseFloat(secondvalue))
    }
    if (firstvalue=="" || secondvalue==""){
      setResult("Empty input!")
    }
   
  }
  return (
    <>
   
    <div>
    <FirstOperand onChange={getFirstvalue}/>
     <SecondOperand onChange={getSecondvalue}/>
     <AddButton onClick={addValues}/>
     <SubtractButton onClick={subtractValues}/>
     <MultipButton onClick={multiplyValues}/>
     <DivisionButton onClick={divideValues}/>
     <ResultInput result={result}/>
    </div>
    </>
  )
}

export default App
