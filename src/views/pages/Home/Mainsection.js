import { Box, Button, Hidden, Typography, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  mainSectionBox: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#000",
    overflow: "hidden",
    position: "relative",
    "& .phone-img":{
      [theme.breakpoints.down("md")]:{
        maxWidth:"300px",
        width:"100%"
      },
      [theme.breakpoints.down("sm")]:{
        maxWidth:"180px",
        width:"100%"
      }

    },
    "& .bottomBox2":{
      [theme.breakpoints.down("sm")]:{
       display:"block"
      },
    },
    "& .paraBox":{
      [theme.breakpoints.down("sm")]:{
       justifyContent:"space-between"
      },
    },
    "& .text-box":{
      "& h1":{
        [theme.breakpoints.down("md")]:{
          lineHeight: "130px",
          fontSize:"150px"
        },
        [theme.breakpoints.down("sm")]:{
          lineHeight: "80px",
          fontSize:"100px"
        },
      },
      "& h2":{
        [theme.breakpoints.down("md")]:{
          lineHeight: "130px",

          fontSize:"150px"
        },
        [theme.breakpoints.down("sm")]:{
          lineHeight: "80px",

          fontSize:"100px"
        },
      },
    }
  }
}))

export default function Mainsection() {
  const classes = useStyles();
  useEffect(() => {
    const parallaxAll = document.querySelectorAll(".parallex");
    let cursor = document.querySelector(".cursor")
    let cursor2 = document.querySelector(".cursor2")
    const handleMouseMove = (e) => {
      // cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px;, top " + e.clientY + "px;";
      cursor.style.left = e.clientX +"px";
      cursor2.style.left = e.clientX +"px";
      cursor.style.top = e.clientY +"px";
      cursor2.style.top = e.clientY +"px";
      const xValue = e.clientX - window.innerWidth / 2;
      const yValue = e.clientY - window.innerHeight / 2;



      parallaxAll.forEach((el) => {
        let speedx = el.dataset.speedx
        let speedy = el.dataset.speedy
        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy}px)) perspective(2300px) translateZ(${zValue}px)`;

      });
    };
    // let timeline = gsap.timeline();
    // timeline.from(".cube-img",{
    //   opacity:"0"
    // })


    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box className={classes.mainSectionBox}>
      <img src='images/Vector.png' alt='cube' data-speedx="0.030" data-speedy="0.010" className='parallex bg-img' />
      <img src='images/cube.svg' alt='cube' data-speedx="0.030" data-speedy="0.015" className='parallex cube-img' />
      <img src='images/piller.svg' alt='cube' data-speedx="0.10" data-speedy="0.030" className='parallex piller-img' />
      <img src='images/stairs.svg' alt='cube' data-speedx="0.015" data-speedy="0.05" className='parallex stairs-img' />
      <img src='images/cubess.svg' alt='cube' data-speedx="0.05" data-speedy="0.03" className='parallex cubess-img' />
      <Box data-speedx="0.020" data-speedy="0.020" className='parallex text-box'>
        <img src='images/phone.svg' alt='cube' data-speedx="0.020" data-speedy="0.020" className='parallex phone-img' />

        <h1>cash</h1>
        <h2>app</h2>
      </Box>
      <Box>
        <Box>
          <Box className='bottomBox'>
            <Box className='bottomBox2'>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Button className='downloadButton glow-on-hover'>
                  <img src='images/apple.svg' alt='apple' />&nbsp;&nbsp;
                  APP STORE
                </Button>
                <Box ml={2}>

                  <Button className='downloadButton glow-on-hover'>
                    <img src='images/playstore.svg' alt='apple' />&nbsp;&nbsp;
                    GOOGLE PLAY
                  </Button>
                </Box>
              </Box>

              <Box className='paraBox'>
                <p>
                  Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                  See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                </p>
                <Hidden smDown>

                <img src='images/diss.svg' />
                <img src='images/twitter.svg' />
                <img src='images/insta.svg' />
                </Hidden>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className='bounceBox'>

          <img src='images/downarrow.svg' alt='arrow' className='arrowBox bounceBox' />
        </Box>
      </Box>
      <Box className='cursor'>

      </Box>
      <Box className='cursor2'>

      </Box>
    </Box>
  )
}
