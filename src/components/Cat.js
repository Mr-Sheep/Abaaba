import React from 'react';
//import User from './User';

function Cat({text, name, upvotes}){
    return (
        <section>
            <h1>Fact from {name ? `${name.last} ${name.first}` : 'Unknown'}</h1>
            <p>{text}</p>
            <p>Upvotes:{upvotes}</p>
        </section>
    )
}
export default Cat;