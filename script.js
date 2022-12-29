const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement("div", {}, [heading1, heading2]);

// console.log(heading); // React Element => Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
