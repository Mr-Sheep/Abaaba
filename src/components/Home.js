import React from 'react';
import Cat from './Cat';

export default function Home({cats}){
    return(
    <div id="all">
        <img src = "https://tse2-mm.cn.bing.net/th/id/OIP.beme4RCj0MOwiYCuiRbc3gHaD4?pid=Api&rs=1" id ="image"/>
        <div className = "Introduction">
            <h1>Introduce the Website</h1>
            <p>
                This should be the introduction of the website.
            </p>
        </div>
        <article>
            <header>
                <h1>Sample Cat Facts</h1>
            </header>
            <div className = "sample">
            {cats.slice(1,4).map(({text, user, upvotes}, i) =>(
                    <Cat key={i} text={text} name={user ? user.name : null} upvotes = {upvotes}/>
                ))}
            </div>
        </article>
    </div>
        
        );
}