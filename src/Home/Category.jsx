import React from 'react';

const Category = () => {
    const LinksData = [
        { No: '1', imgSrc: "", Category: "HandMade Toys" },
        { No: '2', imgSrc: "", Category: "Soaps" },
    ];

    return (
        <div className="link">
            {LinksData.map((item, index) => (
                <Links
                    key={index}
                    imgSrc={item.imgSrc}
                    Category={item.Category}
                />
            ))}
        </div>
    );
};

const Links = ({ imgSrc, Category }) => {
    return (
        <div className="options">
            <div className={Category}>
            <p>{Category}</p>
        </div>
        </div>
    );
};

export default Category;