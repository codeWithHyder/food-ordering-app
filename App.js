const heading = React.createElement("h1", {id:"heading1"}, 
[React.createElement("p", {id:"pr1"}, "hello i am from paragraph1"),
 React.createElement("p", {id: "pr2"},"hello i am from paragraph2")]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// use of jsx