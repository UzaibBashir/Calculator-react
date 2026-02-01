import { useState } from "react";

export default function Calculator() { 
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => { 
    if (display === "0") { 
      setDisplay(value); 
    } else { 
      setDisplay(display + value); 
    } 
  };

  const calculate = () => { 
    try { 
      setDisplay(eval(display).toString()); 
    } catch { 
      setDisplay("Error"); 
    } 
  };

  const clear = () => {
    setDisplay("0");
  };

  const Button = ({ value, onClick }) => 
    ( <button onClick={onClick} className="bg-gray-800 hover:bg-gray-700 text-white text-xl p-4 rounded"> {value} </button> );

  const Button2 = ({ value, onClick }) => 
    ( <button onClick={onClick} className="bg-gray-800 hover:bg-gray-700 text-white text-xl p-4 rounded w-32"> {value} </button> );

  const Button3 = ({ value, onClick }) => 
    ( <button onClick={onClick} className="bg-red-900 hover:bg-red-800 text-white text-xl p-4 rounded "> {value} </button> );

return ( 
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"> 
  <div className="bg-gray-900 p-6 rounded-2xl shadow-xl w-80"> 
    <div className="bg-black text-green-400 text-right text-2xl p-4 mb-4 rounded"> 
      {display} 
    </div>

    <div className="grid grid-cols-4 gap-3">
      

      {["7", "8", "9"].map((n) => (
        <Button key={n} value={n} onClick={() => handleClick(n)} />
      ))}
      <Button value="+" onClick={() => handleClick("+")} />

      {["4", "5", "6"].map((n) => (
        <Button key={n} value={n} onClick={() => handleClick(n)} />
      ))}
      <Button value="-" onClick={() => handleClick("-")} />

      {["1", "2", "3"].map((n) => (
        <Button key={n} value={n} onClick={() => handleClick(n)} />
      ))}
      <Button value="*" onClick={() => handleClick("*")} />

      <Button value="0" onClick={() => handleClick("0")} />
      <Button value="^" onClick={() => handleClick("**")} />
      <Button value="%" onClick={() => handleClick("%")} />
      <Button value="/" onClick={() => handleClick("/")} />
      
      <Button3 value="C" onClick={clear} />
      <Button value="." onClick={() => handleClick(".")} />

      
      
      <Button2 value="=" onClick={calculate} />
      
      
    </div>
  </div>
</div>

); }