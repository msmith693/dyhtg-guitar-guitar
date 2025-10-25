import React, { useEffect } from "react";
import {useState} from "react";

function FetchProducts(){
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    fetch("https://cors-anywhere.herokuapp.com/https://www.guitarguitar.co.uk/hackathon/products/")   //using proxy url to avoid CORS issu
    .then((res)=>{
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setProducts(data);   //calls setProducts function
    })
    .catch(error => console.error(error));
  }, []); //empty array means the fetch call only runs once at start of rerender

  return (
    <div>
      {products.map((product) => (
        // <img key={product.SKU_ID} src={product.PictureMain} alt={product.ItemName} width = {100}/>
        <p>
          {product.ItemName}
        </p>
      ))}
    </div>
  )
}

export default FetchProducts;