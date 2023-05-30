import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [property, setProperty] = useState([]);
 

  const filterPrice=(category)=>{
    const updatedFilter=property.filter((item)=>{
        return item.cost===category;
    });
     setProperty(updatedFilter);
  }

  const filterPropertyType=(category)=>{
    const updatedFilter=property.filter((item)=>{
        return item.type===category;
    });
       setProperty(updatedFilter);
  }

  const getProperties = async () => {
    const response = await fetch("https://web-production-f5d5.up.railway.app/");
    console.log(response);
    setProperty(await response.json());
  };

  useEffect(() => {
    getProperties();
  },[]);
  return (
    <div>
    <div className="home">
      <div className="heading">
        <h1>Search Properties to rent</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search with SearchBar" />
        </div>
      </div>

      <div className="filter-box">
        <button className="all" onClick={()=>setProperty(property)}>All</button>
        <button className="price" onClick={()=>filterPrice('low')}>Low Price</button>
        <button className="price" onClick={()=>filterPrice('high')}>High Price</button>
        <button className="property-type" onClick={()=>filterPropertyType('house')}> Houses</button>
        <button className="property-type" onClick={()=>filterPropertyType('flat')}>Flats</button>
      </div>
      <div className="properties">
        {property.map((item, i) => (
          <div className="property-card">
            <img src={item.image} alt="not found" className="card-img" />
            <div className="property-description">
              <div className="property-price">
                <b>
                  <h3><b>Price:</b> {item.cost}</h3>
                </b>
              </div>
              <div className="property-location">
                <h2>
                  <b>{item.location}</b>
                </h2>
              </div>
              <div className="property-address"><b>{item.address}</b></div>
              <div className="property-type">
                Property type:<b>{item.type}</b>
              </div>
            </div>
            <div className="btn">
              <button>Enquire</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="footer">
      <h2>All Rights Reserverd @ Estatery Pvt. Ltd.</h2>
    <div className="note">
      <h3>Note: Please refresh the page after every filter operation</h3>
    </div>
    </div>
  </div>
  );
};

export default Home;
