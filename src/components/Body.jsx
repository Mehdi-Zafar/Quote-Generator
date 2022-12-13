import { useState,useEffect } from "react";
const Body = () => {
    const [quote,setQuote] = useState("Genius is one percent inspiration and ninety-nine percent perspiration.")
    const [author,setAuthor] = useState("Thomas Edison")
    const [allQuotes,setAllQuotes] = useState([])

    useEffect(
        function(){
            fetch("https://type.fit/api/quotes")
                .then((res) => res.json())
                .then((data) => setAllQuotes(data));
        }
        ,[])

    function handleClick(){
        const randomNum = Math.floor(Math.random()*allQuotes.length);
        const selectedQuote = allQuotes[randomNum].text;
        const selectedAuthor = allQuotes[randomNum].author;
        if(selectedAuthor !== null){
            setQuote(selectedQuote);
            setAuthor(selectedAuthor);
        }else{
            setQuote(selectedQuote);
            setAuthor("Unknown");
        }
        console.log(allQuotes[randomNum]);
    }

    return ( 
        <div className="quote-container">
            <h1>{quote}</h1>
            <h3>- {author}</h3>
            <button onClick={handleClick}>Change Quote</button>
        </div>
     );
}
 
export default Body;