import React from 'react';
import Cat from './Cat';

export default function Fact({cats}){
    return(
        <article>
            <header>
                <h1>Interesting Cat Facts</h1>
            </header>
            <div className = "cat">
                {cats.map(({text, user, upvotes}, i) =>(
                    <Cat key={i} text={text} name={user ? user.name : null} upvotes = {upvotes}/>
                ))}
            </div>
        </article>
    );
}



