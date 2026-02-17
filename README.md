# React

## Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimizations
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - To support older browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - Remove unused code from files
- Different dev and prod bundles (npx parcel build index.html)

## JSX
- JSX is not writing HTML in JS, it's a HTML (or) XML like syntax.
- Creating element using React.createElement is very difficult, so JSX is introduced to simplify this.
Sample for React.createElement:
```
React.createElement(
    "h1", 
    {id: "heading"}, 
    "this is an H1 Tag"
);
```
- JSX code is not pure JS since it's not following ES6, Parcel is transpiling the code using Babel and then it is read by the browser.
- Sanitizes the data as well if we try to run some malicious code in the components. 

## Babel
- Babel is a JS compiler.
- Babel transpiles the code so it can be rendered into the browsers.

## React Component
- There are two types of components in react
    1. Class Based Components - OLD
    2. Fucntional Components - NEW => Same as JS functions
    - Anything JS function which just returns JSX, it's called as React Functional Components.
- Eveerything is a component in a React.
- Component Composition -> Rendering component inside another component.