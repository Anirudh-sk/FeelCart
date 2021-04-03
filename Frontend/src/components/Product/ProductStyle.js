import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    root: {
        maxWidth: '100%',
        backgroundColor:'#212121',
        color:'#e3f2fd',
        // height: '300px'

      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      Button: {
        color:'#0288d1',
        marginTop: '-100px'

      }
}));