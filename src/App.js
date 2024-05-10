import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));  
  };
 
  function times(e) { 
    e.preventDefault(); 
    if(inputRef.current.value === '' || inputRef.current.value === '0')
    {
      if(window.confirm("The input is 0 and multiplication with 0 changes the whole result to 0. Are you sure you want to continue.") === false)
        return false;
    }
    setResult((result) => result * Number(inputRef.current.value));  
  }; 
 
  function divide(e) { 
    e.preventDefault();
    if(inputRef.current.value === '' || inputRef.current.value === '0')
    {
      alert("Current input is 0, divide by 0 is not possible. Please enter a valid number other than 0.");
      return false;
    }
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = '';
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult((result) => 0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simple Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>minus</button> 
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 

