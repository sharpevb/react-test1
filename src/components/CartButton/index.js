import React, { Component } from "react";
import products from "../../../src/products.json"


class CartButton extends Component {

    state = {
        products
      }

    click() {
        console.log("hello from CartButton component")
        console.log({products})
    }


    render() {
        return(
            <div>
                <li>
                <button className="btn" onClick={(e) => this.click(e)}>Add to Cart</button> 
                </li>
            </div>
        )
    }
}

// function CartButton(props) {
//     return (
//         <div>
//                 <li>
//                  <button className="button" onClick={console.log("jello")}>Add to Cart</button>   
//                 </li>
            
//         </div>
//     )
// }

export default CartButton;