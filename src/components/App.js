import React from "react";
import Data from "../constants/Data.json";
import Nav from "./Nav";
import PageContent from "./Page/PageContent";

const App = () => {
  return (
    <>
      <Nav Name={Data.Name} ProfilePic={Data.ProfilePic} />
      <PageContent Data={Data} />
    </>
  );
};

export default App;
