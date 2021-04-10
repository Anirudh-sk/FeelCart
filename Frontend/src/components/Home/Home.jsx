import { React } from "react";
import { Grid} from "@material-ui/core";
import Product from "../Product/Product";
import  makeStyles  from "./HomeStyle";
import Navbar from '../Navbar/Navbar';
import SimpleSlider from "../Slider/Slider";


function Home({products, onAddToCart,cart, User}) {
    const classes=makeStyles();
    return (

        <main className={classes.content}>
      <Navbar totalItems={cart.total_items} user={User} />
            <SimpleSlider/>

      

        <div className={classes.toolbar} />
        <Grid container justify='center' spacing={3}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} > 
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>

       
    </main>
    )
}

export default Home
