import React, { Component } from "react";
import Wrapper from "./components/Wrapper/index"
import Card from "./components/Card/index";
import products from "../src/products.json";
//import { render } from "react-dom";


class App extends Component {
  state = {
    products
  }

  componentDidMount() {
  }


  render() {
    return (
      <Wrapper>
        {this.state.products.map(product => (
          <Card
            key={product.number}
            img={product.img}
            name={product.name}
            number={product.number}
            pricing={product.pricing}
          />
        ))}
      </Wrapper>
    )
  }




  // export default function App() {
  //   return (
  //     <div>
  //       <h1>App Component</h1>
  //       <Card></Card>
  //     </div>
  //   );
  // }
};

export default App;