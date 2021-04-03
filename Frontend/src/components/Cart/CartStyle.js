import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
  
  },
  emptyButton: {
    margin:'1%',
    width: '100%',
    
  },
  checkoutButton: {
    margin:'1%',
    width: '100%',
   
  },
  link: {
    margin:'1%',
    backgroundColor: '#0277bd'
  },
  cardDetails: {
    display: 'flex',
    // marginTop: '10%',
    marginRight:'20px',
    width: '100%',
    justifyContent: 'space-between',
    // backgroundColor: 'black',

  },
  body:{
    backgroundColor: '#263238',
    width: '100%',
    color: '#bbdefb'
  },
  total:{
    // marginBottom: '30px',
    // margin:'10px',
    // width: '50%',
    // marginRight: '10px',
    backgroundColor: '#212121',
    height: '100%',
    borderRadius:'10px'
  }
}));