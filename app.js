import React from "react";
import  ReactDOM  from "react-dom/client";

//React.createElement => ReactElemetn(JS Object) => HTMLElement(render)
const heading = React.createElement("h1", {id: "heading"}, "Wel-come React!")



//JSX is not HTML in JS or is xml/html like syntax
//Jsx transpiled before reaches to js engine - done by PARCEL -> Babel  

//JSX => Babel transpiled it to React.createElement => ReactElemetn(JS Object) => HTMLElement(render)
const JSXHeading = <h1 id="jsxheading">Welecome to JSX Syntax😂</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(heading)
console.log(JSXHeading)
// root.render(heading)
root.render(JSXHeading)    
