import React, { useEffect, useState } from 'react'

function Quote() {

//states
    const [quote, setQuote] = useState ([])

//let api = 'http://type.fit/api/quotes'

const handleQuote = (e) => {
   // e.preventDefault();
    let api = "http://api.quotable.io/random";

    fetch(api). then ((res) =>res.json()).then((results) =>{
    setQuote(results)
    console.log(results)

    })

}

useEffect (() => {
    handleQuote();
}, [])

  return (
    <div>
        <h2>Quote of the day</h2>
        <p>{quote.content}</p>
        <p>{quote.author}   </p>
        <button>generate quote</button>
    </div>
  )
}

export default Quote