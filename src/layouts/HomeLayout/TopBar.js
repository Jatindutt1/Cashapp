import Logo from 'src/component/Logo'
import { Box, Button, Container, Link, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  TopbarBox:{
    position:"absolute",
    top:"0",
    left:"0",
    zIndex:"999",
    width:"100%",
    padding:"0.9rem 0",
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
        <Box>
          {ButtonData.map((value) => (

            <Button
                className='buttonStyle'
            >
              {value.name}
            </Button>
          ))}
        </Box>
        <Button>
        <img src='images/eyebutton.svg' alt=''/>
        </Button>
        </Box>
       

      

    </Box>
    </Box>
  )
}
