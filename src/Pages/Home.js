import React from "react";
import Store from "../Components/Store";
import Header from "../Components/Header";
import Gallery from "../Components/Gallery";


const Home = () => {
    return (
        <div className="bg-gradient-to-r from-purple-800 to-indigo-500">
            <Header />
            <Store />
            <Gallery />
        </div>
    ) ;
  };
  
  export default Home;