import React from "react";

const Home = (props) => {
    return (<h1> Hello From Home Module </h1>)
}

export default {routerProps: {
    path:'/',
    exact : true,
    element : Home
},
 moduleName : 'Home'}