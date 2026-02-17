import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>This is a span</span>;

// if we have to write multi-lind JSX, then wrap it in simple brackets '()'
const jsxHeading = (
    <h1 id="headingJSX" className="head" tabIndex="1">
        {elem}
        React heading using JSX!!
    </h1>
);

console.log(jsxHeading); // This will be same as the heading using React.createElement

const number = 1000;

// React Functional Components
// This is similar to JS function(we can use lambda or a normal JS function both) and it just returns JSX
// We can put any JS expression using curly braces in JSX, so now we can just put this variable in the curly brace and thus we can render jsx as well inside the component
const HeadingComponent = () => {
    return (
        <div id="container">
            <h2>{number}</h2>
            {jsxHeading}
            <h1>This is a functional React Component</h1>
        </div>
    );
};

// Component Composition, we can just call the function directly as well, as shown in the below example
const Title = () => {
    return (
        <div id="titleContainer">
            <h1>Title Functional Component</h1>
            <HeadingComponent />
            <HeadingComponent></HeadingComponent>
            {HeadingComponent()}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading); // syntax to render jsxHeading
root.render(<Title />);

