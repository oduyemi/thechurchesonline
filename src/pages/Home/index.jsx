import React, { useEffect } from "react";

import { Banner } from "../../components/Banner"



const Home = () => {
    useEffect(() => {
        document.body.classList.add("home");
        return () => {
          document.body.classList.remove("home");
        };
      }, []);
    return(
        <Banner />
    )
}



export default Home