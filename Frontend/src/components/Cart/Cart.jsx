import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import useStyles from './CartStyle';
import Cartitem from './CartItem/Cartitem';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

function Cart({cart , handleUpdateCartQty,handleEmptyCart,handleRemoveFromCart,User}) {
    const classes = useStyles();

    const EmptyCart = ()=>(
        <>
        <Navbar  User={User}/>
        
        <Button color="secondary" variant='contained' component={Link} to='/Home' className={classes.link} >Start Adding items to your cart</Button >
        </>
    );

    const FilledCart = ()=>(
        <>
        <Navbar  User={User}/>
        <Grid container justify="center" direction="row" spacing={3} >
            <Grid item xs={9} spacing={3} >
            {cart.line_items.map((item)=>(
                <Grid  item xs={12} sm={4} key={item.id}>
                    <Cartitem item={item} 
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart} 
                    />
                <br/>

                </Grid>
            ))}
            </Grid>

            <Grid item xs={3} className={classes.total}>
                <Typography variant='h4'>
                    SUBTOTAL : {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button onClick={()=>handleEmptyCart()} className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                    <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
                </div>
            </Grid>

            {/* <Grid container justify="center"  className={classes.cardDetails}>
                
            </Grid>


        <Grid container spacing={3} direction='column' className={classes.body}>
           
        </Grid> */}
        
            </Grid>
        </>
    );

    if (!cart.line_items) return 'LOADING ...'

    return (
        <Container className={classes.body}>
      <Navbar totalItems={cart.total_items} user={User} />
        {/* <Navbar  User={User}/> */}

            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant='h3' gutterBottom>YOUR SHOPPING CART</Typography>
            {!cart.line_items.length ? <EmptyCart/>:<FilledCart/>}
        </Container>
    )
}

export default Cart
