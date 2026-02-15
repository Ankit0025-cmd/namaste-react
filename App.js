/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>
 *              I'm an H1 Tag
 *          </h1>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "parent" }, 
        [
            React.createElement("h1", {}, "I am an H1 Tag"),
            React.createElement("h1", {}, "I am an H1 Tag again!")
        ]
    )
);

// JSX

console.log(parent);

const headingReact = React.createElement("h1", {id: "heading-react", xyz: "abc"}, "Hello World from React");
console.log(headingReact);
const root = ReactDOM.createRoot(document.getElementById("root")); // ReactDOM is used to manipulate the DOM in the browser
root.render(headingReact);
root.render(parent);
