import "./styles.css";
import { useState } from "react";

function App() {

  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }


  return (
    <div className="calculator-grid">
      <div className="output">
        <form className="current-operand">
          <input type="text" value={result} />
        </form>
        {/* <div className="previous-operand">123,234*</div> */}
        {/* <div className="current-operand">123,234</div> */}
      </div>
      <button onClick={handleClick} id="clear" className="span-two">AC</button>
      <button onClick={handleClick} id="backspace" >DEL</button>
      <button name="/" onClick={handleClick} >/</button>
      <button name="1" onClick={handleClick} >1</button>
      <button name="2" onClick={handleClick} >2</button>
      <button name="3" onClick={handleClick} >3</button>
      <button name="*" onClick={handleClick} >*</button>
      <button name="4" onClick={handleClick} >4</button>
      <button name="5" onClick={handleClick} >5</button>
      <button name="6" onClick={handleClick} >6</button>
      <button name="+" onClick={handleClick} >+</button>
      <button name="7" onClick={handleClick} >7</button>
      <button name="8" onClick={handleClick} >8</button>
      <button name="9" onClick={handleClick} >9</button>
      <button name="-" onClick={handleClick} >-</button>
      <button name="." onClick={handleClick} >.</button>
      <button name="0" onClick={handleClick} >0</button>
      <button onClick={handleClick}  className="span-two">=</button>
    </div>
  );
}

export default App;
