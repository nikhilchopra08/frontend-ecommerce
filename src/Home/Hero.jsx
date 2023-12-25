import React from 'react';

const Hero = () => {
  const Side = [
    { No: '1', imgSrc: "", Category: "Find Goods" },
    { No: '2', imgSrc: "erkfjer", Category: "Artisians" },
    { No: '3', imgSrc: "djks", Category: "Buy & Sell" },
  ];

  return (
    <>
      <div className="top">
        <div className='hero'>
          <img className='hero' alt='Image1' src='https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg'  />
        </div>
        <div className="options-1">
          {Side.map((i, index) => ( // Added 'return' statement here
            <Options
              key={index} // Added key prop for React to keep track of elements
              // imgSrc={i.imgSrc}
              Category={i.Category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Options = ({ imgSrc, Category }) => { // Added 'return' statement here
  return (
    <div className="option-1">
      {/* <img src={imgSrc} alt='title' /> */}
      <p>{Category}</p>
    </div>
  );
};

export default Hero;
