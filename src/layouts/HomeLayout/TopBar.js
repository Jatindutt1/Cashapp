import Logo from 'src/component/Logo'
import { Box, Button, Container, Hidden, Link, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  TopbarBox:{
    position:"absolute",
    top:"0",
    left:"0",
    zIndex:"999",
    width:"100%",
    padding:"0.9rem 0",
    [theme.breakpoints.down("sm")]:{
    padding:"0.2rem 0",
    backdropFilter:"blur(2px)"

    }
  },
  TopbarBox2: {
    maxWidth:"1300px",
    margin:" 0 auto",
    padding:"0 1rem",
    
    "& .flexBox":{
padding:"5px 0px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"
    },
    "& .buttonStyle":{
      fontFamily:" 'Archivo Black', sans-serif",
      fontSize:"12px",
      color:"#fff",textTransform:"uppercase",
    },
    "& .eyeButton":{
      [theme.breakpoints.down("md")]:{

        maxWidth:"50px"
      }
    }
  }
}))

const ButtonData = [
  {
    name: 'Sign In',
  },
  {
    name: 'Legal',
  },
  {
    name: 'Licenses',
  },
  {
    name: 'Security',
  },
  {
    name: 'Careers',
  },
  {
    name: 'Press',
  },
  {
    name: 'Support',
  },
  {
    name: 'Status',
  },
  {
    name: 'Codeblog',
  },
]

export default function TopBar() {
  const classes = useStyles();

  return (
    <Box className={classes.TopbarBox}>
    <Box className={classes.TopbarBox2}>
     
        <Box className='flexBox'>
        <Box>
          <Link to="/">
            <Logo className="logoImg" />
          </Link>
        </Box>
        <Hidden mdDown>

        <Box>
          {ButtonData.map((value) => (

            <Button
                className='buttonStyle'
            >
              {value.name}
            </Button>
          ))}
        </Box>
        </Hidden>
        <Button className='mainEyeButton'>
        <img src='images/eyebutton.svg' alt=''className='eyeButton' />
        </Button>
        </Box>
       

      

    </Box>
    </Box>
  )
}
