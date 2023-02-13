import React from "react";

const Products = (props) => {
  return (
    <div className="cardCross">
      <img src={props.img} alt=""></img>
      <div className="cardRow">
        <div className="card-info">
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
        <div className="detal">
          <button>Детали</button>
        </div>
      </div>
      <hr></hr>
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, a
          voluptas! Facilis sapiente ratione id hic enim assumenda non ipsam
          adipisci minima nihil, rem
        </p>
        <div className="delete">
          <button>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
