import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Grid } from "@material-ui/core";
const Products = () => {
    const [products,setProducts]=React.useState([]);
    const getData = () => {
         
            axios.get("http://localhost:2000/api/products").then((res)=>{
                setProducts(res.data);
            }).catch((err)=>
            {
                console.log("Error");
            });
        
    };
    // getData();
    React.useEffect(getData,[]);
     console.log("important");
   
    return (  

        <div>
          <h1> Make-Up Products </h1>
          { products.length==0?( <p></p>
              ) : (
                  <Grid container spacing={2}>
                      
                      {
                          products.map((product,index)=>
                          (
                          <SingleProduct key={index} product={product}/>
                          
                      ))}
                      </Grid>
              )}
        
        </div>
    );
}
 
export default Products;
