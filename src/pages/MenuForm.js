import React, { Component } from "react";
import axios from "axios";
import "./ProductForm.css";

class MenuForm extends Component {
  state = {
    name: "",
    description: "",
    price: "",
    type: "",
    restaurantName: "",
    restaurantId: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);

    const { data } = await axios.get(
      "http://192.168.1.71:8080/admin/restaurants/" + id
    );

    //Clone
    const state = { ...this.state };
    // //Edit
    state.restaurantId = id;
    state.restaurantName = data.restaurant.name;

    //Set state
    this.setState(state);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    //ADD
    // if (this.props.match.params.id === "new") {
    //Call Backend
    const obj = {
      ...this.state,
    };
    //   await axios.post("http://192.168.1.71:8080/admin/addMenu", obj);
    // } else {
    //   //EDit
    //   const obj = {
    //     ...this.state,
    //   };
    await axios.put("http://192.168.1.71:8080/admin/addMenu", obj);
    // }

    this.props.history.replace("/restaurants");
  };

  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };

  render() {
    return (
      <div className="wrapper">
        <div class="title">
          {this.props.match.params.id === "new"
            ? "Add Menu Item"
            : "Add Menu Item"}
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="inputfield">
            <label>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="input"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="inputfield">
            <label>Description</label>
            <textarea
              id="description"
              name="description"
              className="textarea"
              onChange={this.handleChange}
              value={this.state.description}
            ></textarea>
          </div>
          <div className="inputfield">
            <label>Price</label>
            <input
              id="price"
              name="price"
              type="number"
              className="input"
              onChange={this.handleChange}
              value={this.state.price}
            />
          </div>

          <div className="inputfield">
            <label>Type</label>
            <input
              id="type"
              name="type"
              type="text"
              className="input"
              onChange={this.handleChange}
              value={this.state.type}
            />
          </div>
          <div className="inputfield">
            <input
              type="submit"
              value={this.props.match.params.id === "new" ? "Add" : "Add"}
              className="btn"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default MenuForm;
