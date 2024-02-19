// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import "./Style.css";

const Menucard = ({ MenuData }) => {
  return (
    <>
      <div className="main">
        {MenuData.map((curElem) => {
          return (
            <div className="cards">
              <div className="images">
                <img src={curElem.Img} alt="" />
              </div>
              <div className="title">
                <h1>{curElem.Name}</h1>
                <h6>
                  <strong> Price : {curElem.Price}Rs</strong>
                </h6>
                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.</p>
                <button className="btn">Add To Cart</button>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menucard;