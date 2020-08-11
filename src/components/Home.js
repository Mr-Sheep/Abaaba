import React from 'react';
import Cat from './Cat';

export default function Home({cats}){
    return(
    <div id="all" className = "split left">
        <div className = "centered">
            <img src = "https://tse2-mm.cn.bing.net/th/id/OIP.beme4RCj0MOwiYCuiRbc3gHaD4?pid=Api&rs=1" id ="image"/>
            <div className = "Introduction">
                <h1>Introduction of the Gorgeous Website</h1>
                <br/>
                <ul>
                    <li>We focus on interesting facts about cats, presenting them in the form of decks.</li>
                    <li>Each card includes the author, text of the cat fact, and number of upvotes received.</li>
                </ul>
            </div>
        </div>
    
    <div className="split right">
        <article>
            <header>
                <h1>Sample Cat Facts</h1>
            </header>
            <div className = "grid">
            {cats.slice(1,9).map(({text, user, upvotes}, i) =>(
                    <Cat key={i} text={text} name={user ? user.name : null} upvotes = {upvotes}/>
                ))}
            </div>
        </article>
    </div>
    </div>
        
        );
}