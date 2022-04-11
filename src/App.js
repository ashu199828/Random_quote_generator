import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,SetData] = useState({
    quote:'with great power comes great responsibility',
    author:'by Aadarsh'
  })
  const [quote,SetQuote] = useState()
  const randomNumber = Math.floor(Math.random()*100)
  const newQuote = ()=>{
    let msg = quote[randomNumber].quote
    let by = quote[randomNumber].author
    SetData({
      quote:msg,
      author:by
    })
    

  }
   
  useEffect(() => {
    
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(dat => SetQuote(dat.quotes));
    
  }, [])
  const colors = [
   '#FFFF66', '#FF6666','#CC66FF', '#99FF00', '#FF6600', 'red','yellow','green','blue','pink','orange','voilet','yellowgreen','aqua','bluevoilet','brown'
  ]
  const randomColorNum = Math.floor(Math.random()*colors.length)
  console.log(randomColorNum)
const styles = {
  color: colors[randomColorNum],
  
}
const bgStyle ={
  backgroundColor: colors[randomColorNum]
}
  
  
  return (
    
    <div style={bgStyle} className="wrapper">
     <div className='quote-box'>
       <div className='text'>
         <p style={styles}>"{data.quote}"</p>
       </div>
       <div className='author'>
         <p style={styles}>-{data.author}</p>
       </div>
       <div className='new-quote'>
         <a href="http://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer"> Tweet</a>
         <p style={bgStyle} onClick={newQuote}>New quote</p>
       </div>


     </div>
     
    </div>
  
  );
}

export default App;
