import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link, Route, Routes } from 'react-router-dom';



const Quote = () => {
    const [quote,setQuote] = useState([]);
    const navigate = useNavigate();
    let count=0;

    useEffect(() => {
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
            .then(res => res.json())
            .then(result => {
                setQuote(result);
            })
            .catch(() => {
                navigate('/not-found');
            })
    }, [navigate]);

    const nextQuoteHandler = () => {

            fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
                .then(res => res.json())
                .then(result => {
                    setQuote(result);
                })
                .catch(() => {
                    navigate('/not-found');
                })
       
    };

    
   
    if(quote.map(q=>q.character) && quote.map(q=>q.quote))
    {
        let source = `${quote.map(q=>q.image)}`
        console.log(source)
        return (
        <>
        <div>
        <h1> Random quote:</h1>
           <ul>
                <li>Character:{quote.map(q=>q.character)} </li>
                <li>quote:{quote.map(q=>q.quote)}</li>
                
            </ul>
            <div className = 'Slidebw'
                style = {
                    {
                        backgroundImage: `url(${source})`,
                    }
                }>
            </div>

            <button onClick={nextQuoteHandler}>Next</button>
            </div>
        </>
    );
    }

    return(<><h1>Loading...</h1></>);
    
};

export default Quote;