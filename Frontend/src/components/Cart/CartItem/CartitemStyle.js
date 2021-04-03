import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
    width: '100%',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor:'#212121',
    color:'#e3f2fd',
  },
  cartActions: {
    justifyContent: 'space-between',
    backgroundColor:'#212121',
    color:'#e3f2fd',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));