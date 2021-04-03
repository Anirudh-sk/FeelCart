import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#263238',
    height:'100%',
    padding: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
}));