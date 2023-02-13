import React, { useState } from "react";
import "./App.css";
import Products from "./Products";
import cardProducts from "./arr";

const App = () => {
  const [name, setName] = useState('')

  const filterName = cardProducts.filter(item =>{
    return item.name.toLowerCase().includes(name) 
  })

  return (
    <div className="Cards">
      <div className="input">
        <input onChange={(e) => setName(e.target.value)}></input>            
      </div>
      <div className="Cross">
        {filterName.map((elem) => (
          <Products img={elem.image} name={elem.name} price={elem.price} />
        ))}
      </div>
    </div>
  );
};

export default App;
