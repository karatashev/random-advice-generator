
import './App.css';
import React, { useState, useEffect } from 'react';
import AdviceCard from './Components/AdviceCard/AdviceCard';


function App() {
  const [advice, setAdvice] = useState('')
  const [color, setColor] = useState('')

  useEffect(() => {
    fetchData();
    randomColor()
  }, [])
 
  const fetchData = () => {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const { advice } = data.slip
      setAdvice(advice);
      setColor(randomColor)
    })
    .catch((err) => console.log(err))
  }

  const randomColor = () => {
    let randomColor1 = Math.floor(Math.random() * 256);
    let randomColor2 = Math.floor(Math.random() * 256);
    let randomColor3 = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`
  }

  return (
    <div className="App">
      <h2>Random advice generator</h2>
      <AdviceCard fetchData={fetchData}  advice={advice}/>
    </div>
  );
}

export default App;
