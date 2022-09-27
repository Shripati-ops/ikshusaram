import React from "react";

const About = (props) => {
    return (<h1> Hello From the About page </h1>)
}

export default {routerProps: {
    path:'/about',
    exact : true,
    element : About
},
 moduleName : 'About Us'}