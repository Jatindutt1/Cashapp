import { Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  mainSectionBox: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#000",
    overflow: "hidden",
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center",
    // flexDirection:"column"
    position: "relative"
  }
}))

export default function Mainsection() {
  const classes = useStyles();
  
  return (
    <Box className={classes.mainSectionBox}>
      <img src='images/Vector.png' alt='cube' className='parallex bg-img' />
      <img src='images/cube.svg' alt='cube' className='parallex cube-img' />
      <img src='images/piller.svg' alt='cube' className='parallex piller-img' />
      <img src='images/stairs.svg' alt='cube' className='parallex stairs-img' />
      <img src='images/cubess.svg' alt='cube' className='parallex cubess-img' />
      <Box className='parallex text-box'>
        <img src='images/phone.svg' alt='cube' className='parallex phone-img' />

        <h1>cash</h1>
        <h2>app</h2>
      </Box>
    </Box>
  )
}
