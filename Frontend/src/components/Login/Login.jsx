import React from 'react';
import { Button, Grid } from '@material-ui/core';
import fire from '../../fire'
import firebase from 'firebase'
import { AccountCircleTwoTone} from '@material-ui/icons';


function Login({setUser}) {
    
    const onSubmit = (e)=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        fire.auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result.user);
          setUser(result.user);
          window.location='/Home'
        }).catch((error) => {
          console.log(error);
          alert('Error logging in')
        });
      }
    return (
        <div style={{ height:'100vh'}}>
          <Grid container justify="center" >
            
            <Button style={{marginTop:'25%'}} variant="contained" color='secondary' onClick={onSubmit} ><AccountCircleTwoTone  style={{margin:'10px'}}/> Sign in with Google</Button>
          </Grid>
        </div>
    )
}

export default Login
