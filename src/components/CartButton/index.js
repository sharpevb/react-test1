import React, { Component } from "react";
import products from "../../../src/products.json"
import "./style.css";


class CartButton extends Component {

    state = {
        products
      }

    click() {
        //console.log("CartButton component")
        console.log(products)
    }


    render() {
        return(
            <div>
                <li>
                <button className="btn" onClick={(e) => this.click(e)}><strong>Add to Cart</strong></button> 
                </li>
            </div>
        )
    }
}

// function CartButton(props) {
//     return (
//         <div>
//                 <li>
//                  <button className="button" onClick={console.log("hello")}>Add to Cart</button>   
//                 </li>
            
//         </div>
//     )
// }

export default CartButton;