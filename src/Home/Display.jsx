import React from 'react';

const Display = () => {
  const handmadeCategories = [
    { category: "Handmade Jewelry", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZAPy_TtsMN71M69s3C-R6-Xo86WrmMSnxABqxxHeQKnwiCdUq8o-f3FoAK--xYf3Ejc&usqp=CAU" },
    { category: "Handwoven Textiles", imgSrc: "https://materialdistrict.com/wp-content/uploads/2016/11/Marian-de-Graaff-Paper-Textiles-Handmade-ONA595-3.jpg" },
    { category: "Handcrafted Pottery", imgSrc: "https://www.alpaperhouse.com/images/dummy/w360/photoframes1.png" },
    { category: "Artisanal Soaps and Candles", imgSrc: "https://i.etsystatic.com/25762160/r/il/c70ddb/3022145278/il_570xN.3022145278_s73u.jpg" },
    { category: "Handmade Leather Goods", imgSrc: "https://thebicyclist.in/cdn/shop/products/a5-note-book-cover-bicyclistshop-leather-goods-322247.jpg?v=1654944911" },
    { category: "Hand-knitted Clothing", imgSrc: "https://i.etsystatic.com/25762160/r/il/c70ddb/3022145278/il_570xN.3022145278_s73u.jpg" },
    { category: "Wooden Handicrafts", imgSrc: "https://5.imimg.com/data5/SELLER/Default/2023/1/WK/UZ/UU/13705781/wooden-handicraft.jpg" },
    { category: "Handmade Paper Products", imgSrc: "https://imgmedia.lbb.in/media/2021/01/6009326ba48236081a0b4c61_1611215467949.jpg" },
  ];

  const Services = ["Services" , "Services" ,"Services" , "Services" ];
  return (
    <div className="main">
    <div className="handmade-categories">
      <div className="catgories">
      {handmadeCategories.map((category, index) => (
        <HandMadeCategories
          key={index}
          imgSrc={category.imgSrc}
          category={category.category}
        />
      ))}
    </div>
    </div>

    <div className="service">
    <ul>
        {Services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      </div>


    </div>
  );
};

const HandMadeCategories = ({ category, imgSrc }) => { // Use object destructuring for props
  return (
    <div className="category">
      <img src={imgSrc} alt={category} />
    </div>
  );
};


export default Display;