import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    h3 :
    {
        
        fontStyle:"bold",
        color:"white",
        paddingTop:"20px",
        textAlign:"center",
        fontSize:"40px"
      
       
        
        
    },
    link:
    {
        color:"white",
        paddingTop:"10px",
        fontSize:"30px",
        paddingLeft:"40px",

    },
    para:
    {
        paddingLeft:"30px",
        fontStyle:"bold",
        color:"white",
        fontSize:"30px",
        textAlign:"center"
    },
    span:
    {
        fontStyle:"italic",
        fontSize:"26px",
        color:"#e57373" ,
       
    }
    
       
    
      }));
const LandingPage = () => {
    const classes =useStyles();
    return ( 
        
        <Grid item xs={12} sm={6} md={8} lg={12}>
            <section style={{backgroundImage:"url(/images/back.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            
        <div>
      
        <h1 className={classes.h3}>
            BEAUTIFY
            
            <br />
            <span className={classes.span}>
            FIND YOUR MATCH SHADE! 
        </span> 
      
            </h1>
            
            <h2 className={classes.para}>
            HIGH-PERFORMING NATURAL PRODUCTS
        </h2>
       <p className={classes.link}>

           <h1>
             FREE SignUP!!
           </h1>
           To experince the amazing products: <br/> Regiter now!  <Link underline="hover" href="/signup" style={{ color:"white"}}>SignUp</Link>
       </p>
         
        
    </div>
   <div>
   <Grid item xs={11} sm={5} md={6} lg={4}>
       <div style={{paddingLeft:"30px",paddingBottom:"20px"}}>

       
            <Card sx={{maxWidth:500}} style={{display:"flex"}}>
            <CardMedia
            component="img"
            height="150"
            image="/images/2.jpg"
            alt="no picture available">
        </CardMedia>
        <CardContent>
            <Typography gutterBottom variant ="h8" component="div">
            Free MakeUp Class           </Typography>
            <Typography variant="body2" color="text.secondary" style={{paddingRight:"10px"}}>
                 We offer free makeup classes<br /> come and become a memeber of our classes. <br /> Meet and Greet with Experts
             Every Sunday 2pm Venu:Gulberg,Lahore
            </Typography>
        </CardContent>
            </Card>
            <div style={{paddingBottom:"20px",paddingTop:"20px"}}>
            <Card sx={{maxWidth:450}} style={{display:"flex"}}>
            <CardMedia
            component="img"
            height="200"
          
            image="/images/ra.jpg"
            alt="no picture available">
        </CardMedia>
        <CardContent>
            <Typography gutterBottom variant ="h8" component="div">
            Love-YourSelf          </Typography>
            <Typography variant="body2" color="text.secondary" style={{paddingRight:"10px"}}>
                We arrange every month semniar on menatl health <br/>
                 feel free to join us for further details E-mail us on query@gamil.com
            </Typography>
        </CardContent>
            </Card>
            </div>
            </div>
           
</Grid>
   </div>
  

</section>
<section style={{paddingTop:"20px"}} >
<div>
    <h1 style={{fontFamily:"fantasy",fontStyle:"italic",fontWeight:"bold",fontSize:"80px"}}>LIVE FREE ,FEEL FREE  </h1>
  <img src="/images/1.jpg" alt="" style={{width:"100%"}}/>

</div>
<div style={{backgroundImage:"url(/images/building.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
    <h1 style={{fontFamily:"fantasy",fontStyle:"italic",fontWeight:"bold",fontSize:"80px",color:"white"}}>STAY IN THE KNOW <br /><span> Join Us On This Amazing Adventure </span></h1>
    <ul>
    <li style={{borderRightStyle:"solid",borderWidth:"5px",display:"inline"}}>
    <Link underline="hover" href="/about" style={{ fontFamily:"fantasy",color:"white",fontSize:"25px"}}>AboutUs</Link>
    </li>
    <li style={{borderRightStyle:"solid",display:"inline",borderWidth:"5px"}}>
    <Link underline="hover" href="/contact" style={{fontFamily:"fantasy", color:"white",fontSize:"25px" ,paddingTop:"10px"}}>ContactUs</Link>
    </li>
    <li style={{borderRightStyle:"solid",display:"inline",borderWidth:"5px"}}>
    <Link underline="hover" href="/signup" style={{ fontFamily:"fantasy",color:"white",fontSize:"25px",paddingTop:"10px"}}>Register</Link>
    </li>
    </ul>
</div>
</section>

    
   </Grid>
    
        
             
     );
}
 
export default LandingPage;