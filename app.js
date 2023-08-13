import React from "react";
import  ReactDOM  from "react-dom/client";

//React Element
const Heading = (
    <h1 className="heading">
        Welecome to JSX Syntax😂
    </h1>  
);

const elem = <span>React Element </span>

//Normal function components
const Title = function (){
    return (
        <h1 className="head">
            {elem}
             Title 😂
        </h1>  
    );
} 

//React Components | arrow function
// it's component composition 

const data = 1000;
const FunctionComponent = () => (
    <div className="container">
     <Title />
     <h2>localhost:{data + 234}</h2>
     {Title()}
     <h1 className="heading">I am Function Component </h1> 
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(Heading) 
root.render(<FunctionComponent />)   
