import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Mainsection from "./Mainsection";
function Home(props) {
  return (
    <Page title="Marketplace | MetaArts">
      <Box >
        <Mainsection/>
      </Box>
    </Page>
  );
}

export default Home;
