import {products} from "./FetchProducts"
import {query} from "./App"


function QueryProducts(){
  const filteredProducts = products.filter((product)=>{
    return product.SalesPrice<=query
  });

  return filteredProducts;
}


export default QueryProducts;