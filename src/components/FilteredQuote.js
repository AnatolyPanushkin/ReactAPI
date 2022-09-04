import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link, Route, Routes } from 'react-router-dom';



const FilteredQuote = () => {
    const [name,setName] = useState('');
    const [count,setCount] = useState('');
    const[filteredQuote,setFilteredQuote] = useState([]);
    const navigate = useNavigate();
    
   
   

    const searchQuote = () => {
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${name}`)
        .then(res => res.json())
        .then(result => {
            setFilteredQuote(result);
        })
        .catch(() => {
            navigate('/not-found');
        })
        
    };
    
    
    return (
        <>
            <div className='FilteredQuote'>
                <label for="filteredQuote">Введите имя персонажа:</label>
                <input type='text' id='filteredQuote' onChange={(event) => setName(event.target.value)}></input>
                <button onClick={searchQuote}>Search</button>

                        <div>
                        <h1> Quote of {filteredQuote.map(q=>q.character)}:</h1>
                        <ul>
                            <li>Character:{filteredQuote.map(q=>q.character)} </li>
                            <li>quote:{filteredQuote.map(q=>q.quote)}</li>
                        </ul>
                    
                        <div className = 'Slidebw'
                            style = {
                                {
                                    backgroundImage: `url(${filteredQuote.map(q=>q.image)})`,
                                }
                            }>
                        </div>
                        </div>
            </div>
        </>
    );    
};

export default FilteredQuote;