import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Lokesh Singh",
        address: {
          street: "React",
          zipCode: "21232",
          country: "India",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
        console.log(response);
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
    console.log(this.props.ingredients);
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.input}
          type="text"
          name="name"
          placeholder="Your Name"
        ></input>
        <input
          className={classes.input}
          type="email"
          name="email"
          placeholder="Your Email"
        ></input>
        <input
          className={classes.input}
          type="text"
          name="street"
          placeholder="Street"
        ></input>
        <input
          className={classes.input}
          type="text"
          name="postalCode"
          placeholder="Postal Code"
        ></input>
        <Button btnType="success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.contactdata}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
