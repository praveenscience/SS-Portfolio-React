import React from "react";
import Data from "../constants/Data.json";
import Nav from "./Nav";

const App = () => {
  return (
    <>
      <Nav Name={Data.Name} ProfilePic={Data.ProfilePic} />
    </>
  );
};

export default App;
