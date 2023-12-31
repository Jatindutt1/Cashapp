import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom"
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
 
  width:"100%",
  
  },
  MainLayout:{
    // minHeight:"calc(100vh - 415px)"
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  console.log(history.location);
  return (
    <div className={classes.root}>
      <TopBar />
      <div
        style={
          history.location.pathname !== "/"
            ? { display: "block" }
            : { display: "none" }
        }
      ></div>

      <div className={classes.MainLayout}>{children}</div>
    
    </div>
  );
};

export default MainLayout;
