import logo from "./logo.svg";
import "./App.css";
import React from "react"

function App() {
  const [result, setResult] = React.useState();
  const [from, setFrom] = React.useState();
  const [to, setTo] = React.useState();
  const swap = () => {
    const from = parseInt(document.getElementById("f1").value);
    const to = parseInt(document.getElementById("f2").value);
    document.getElementById("f1").value = to;
    document.getElementById("f2").value = from;
  }
  function isArrayBool(array) {
    for (var i of array) {
      if (i !== 0 && i !== 1) return false;
    }
    return true;
  }
  function isHex(num) {
    return Boolean(num.match(/^0x[0-9a-f]+$/i))
  }
  const convert = () => {
    const value = document.getElementById("f3").value;
    const from = parseInt(document.getElementById("f1").value);
    const to = parseInt(document.getElementById("f2").value);
    if (from == 2) {
      var digits = value.toString().split('');
      var realDigits = digits.map(Number);
      if (isArrayBool(realDigits)) {
        document.getElementById("f3").style.background = "#fff";
      }
      else {
        document.getElementById("f3").style.background = "red";
      }
    }
    else if (from == 10) {
      const isNumber = (number) => Number.isFinite(number);
      if (isNumber) {
        document.getElementById("f3").style.background = "#fff";
      }
      else {
        document.getElementById("f3").style.background = "red";
      }
    }
    else {
      if (isHex(value)) {
        document.getElementById("f3").style.background = "#fff";
      }

    }
    const decimal = parseInt(value, from);
    const res = decimal.toString(to)
    setResult(res);
  }
  return <div className="container">
    <form >
      <div className="flex">
        <span className="half"><label htmlFor="f1">
          From
        </label>
          <select id="f1">
            <option value="2">Binary</option>
            <option value="10">Decimal</option>
            <option value="16">Hexadecimal</option>
            <option value="8">Octal</option>
          </select>
        </span>
        <span className="half">
          <label htmlFor="f2">
            To
          </label>
          <select id="f2" defaultValue="10">
            <option value="2">Binary</option>
            <option value="10">Decimal</option>
            <option value="16">Hexadecimal</option>
            <option value="8">Octal</option>
          </select>
        </span>
      </div>
      <div className="flex">
        <span><label htmlFor="f3">
          Enter number
        </label>
          <input type="text" id="f3" />
        </span>

      </div>
      <div className="flex "> <button className="bgg" type="button" onClick={() => convert()}>Convert</button>
        <button className="bgb" type="reset">Reset</button>
        <button className="bgb" onClick={() => swap()}>Swap</button ></div>

      <label>
        Result
      </label>
      <div className="result">{result ? result : ""}</div>
    </form>
  </div>;
}

export default App;
