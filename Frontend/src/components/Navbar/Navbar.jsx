import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Avatar, Button } from "@material-ui/core";
import { ShoppingBasket, CloseSharp, ShoppingCart, PowerSettingsNew } from "@material-ui/icons";
import  makeStyles  from './NavbarStyle';
import { Link, useLocation } from "react-router-dom";

function Navbar({totalItems,User}) {
    const classes=makeStyles();
    const location= useLocation();

    console.log(User);
    
    return (
        <div>
        {User===null?<></>:
            <AppBar position='sticky' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/Home' variant='h6' className={classes.title} color='inherit'>
                        <ShoppingCart />
                        Feel Cart
                    </Typography>
                    <div className={classes.grow}/>
                        <Button href='http://localhost:5000/'>

                        <img src="https://img.icons8.com/nolan/64/virtual-reality.png" alt='VR' style={{height:'50px'}}/>
                        </Button>
                        <Avatar style={{height:'35px', width:'35px'}}></Avatar>
                    <div className={classes.button}>
                        <IconButton component={Link} to={location.pathname !== '/cart' ? '/cart':'/Home'} aria-label='show cart items' color='inherit' >
                            <Badge badgeContent={totalItems} color='secondary' >
                            {location.pathname !== '/cart' ? <ShoppingBasket style={{height:'50px'}}/>:<CloseSharp style={{height:'50px'}} />}
                            </Badge>
                        </IconButton>
                        <Button color='secondary' href='/' ><PowerSettingsNew style={{height:'50px'}}/></Button>
                    </div>
                </Toolbar>
            </AppBar>
    }
        </div>
    )
}

export default Navbar
