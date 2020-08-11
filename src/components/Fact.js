import React from "react";
import Cat from "./Cat";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Fact({ cats }) {
  return (
    <div className="cat">
      <h2>Interesting Cat Facts</h2>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {cats.map(({ text, user, upvotes }, i) => (
            <Cat
              key={i}
              text={text}
              name={user ? user.name : null}
              upvotes={upvotes}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
