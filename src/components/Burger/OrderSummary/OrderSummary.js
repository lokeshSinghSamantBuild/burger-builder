import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // This could be a function component
  componentDidUpdate() {
    console.log('Ordwer summery did update');
  }

  render() {
    const ingredientSummery = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capatalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientSummery}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue To Checkout</p>
        <Button btnType="danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxiliary>
    );
  }
}

export default OrderSummary;
