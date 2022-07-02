import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import {Typography} from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {withRouter} from "react-router";
import userService from "../../Services/UserServices";



const SingleProduct = (props) => {
    const {product} =props;
    
   
    return ( 
       
        <Grid item xs={6} sm={5} md={6} lg={4}>
            <Card sx={{maxWidth:350}} style={{background:"#ef9a9a"}}>
           <CardContent>
            <Typography gutterBottom variant ="h5" component="div">
            <h2>{product.BrandName}</h2>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <p>{product.Description}</p>
            
            {userService.isLoggedIn() &&  
            <Button variant="contained"
          
            >AddToCart</Button>
            }                   
            </Typography>
        </CardContent>
            </Card>
           
</Grid>
     );
}
 
export default withRouter(SingleProduct);