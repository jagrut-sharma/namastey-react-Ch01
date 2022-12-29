const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namastey"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "React"
);

const container = React.createElement("div", {}, [heading1, heading2]);
// multiple elements are passed as array elements

// console.log(heading); // React Element => Object

const root = ReactDOM.createRoot(document.getElementById("root"));
// *? Used ReactDOM because DOM needs to be manipulated i.e. elements to be added there => the root will be created => the place where I want my react to run
root.render(container);
