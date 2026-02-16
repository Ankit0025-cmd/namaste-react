import React from "react";
import ReactDOM from "react-dom/client";
/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an H1 Tag</h1>
 *          <h1>I'm an H1 Tag again !</h1>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "parent" }, 
        [
            React.createElement("h1", {key: "child1"}, "I am an H1 Tag"),
            React.createElement("h1", {key: "child2"}, "I am an H1 Tag again!")
        ]
    )
);

// JSX

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root")); // ReactDOM is used to manipulate the DOM in the browser

root.render(parent);
