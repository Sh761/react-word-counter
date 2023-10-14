import React from "react";
import { useState } from "react";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [charcount, setCharcount] = useState(0);
 
  
  let change = (e) => {
    wordcount(e.target.value);
  };

  function wordcount(str) {
    let c = 0;
    let str1 = str.split(" ");
    charCout(str);

    for (let i = 0; i < str1.length; i++) {
      if (str1.length === 0) {
        setCount(0);
      }
      if (str1[i] !== "") {
        c++;
      }
      setCount(c);
    }
  }

  function charCout(str) {
    let c = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        c++;
      }
    }
    setCharcount(c);
  }
  

  

  return (
    <div className="main">
      <div className="file">
       
        <br />
        <textarea
          onChange={change}
          
          
        ></textarea>

        <div id="word-counter">Total number of words written :{count}</div>
        <br />
        <div id="char-counter">Total number of char count :{charcount} </div>
      </div>
    </div>
  );
};

export default App;
