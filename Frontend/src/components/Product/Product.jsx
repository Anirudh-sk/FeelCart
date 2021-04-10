import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton,Button } from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons"
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import useStyles from './ProductStyle'
function Product({product, onAddToCart}) {

    const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name.toUpperCase()}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton className={classes.Button} aria-label='ADD To CART' onClick={()=>{onAddToCart(product.id, 1);handleClick();} }>
                    <Button href={`http://localhost:5000/${product.name}`}  style={{height:'50px', width:'50px'}}>

                        <img src="https://img.icons8.com/nolan/64/virtual-reality.png" alt='VR' style={{height:'50px', width:'50px'}}/>
                        </Button>
                    <AddShoppingCart/>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert variant='filled' onClose={handleClose} severity="success">
                        Item added to the Cart
                        </Alert>
                    </Snackbar>
                    
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
