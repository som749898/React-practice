const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ])
}

const App = () => {
  return React.createElement(
    "div", {},
    React.createElement("h1", {
      className: "brand"
    }, "Hello React"),
    React.createElement(Pet, {
      name: "Blacky",
      animal: "Dog",
      breed: "Labrador"
    }),
    React.createElement(Pet, {
      name: "Goldy",
      animal: "Dog",
      breed: "Pomerian"
    }),
    React.createElement(Pet, {
      name: "abc",
      animal: "Dog",
      breed: "Mix"
    })
  )
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));