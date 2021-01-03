import React, { Component } from "react";
import axios from "axios";
import "./ProductForm.css";
import Restaurants from "./Restaurants";

class ProductForm extends Component {
  state = {
    // id: "",
    name: "",
    description: "",
    latitude: "",
    longitude: "",
    // location: "",
    imageUrl: "",
    address: "",
    openingHour: "",
    // openingHours: "",
    closingHour: "",
    // menuId: "",
    rate: "2",
    type: "",
    // restaurant: "",
    // pharmacie: "",
    // grocerie: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id !== "new") {
      console.log(id);
      const { data } = await axios.get(
        "http://192.168.1.71:8080/admin/restaurants/" + id
      );

      //Clone
      const state = { ...this.state };
      // //Edit
      state.name = data.restaurant.name;
      state.description = data.restaurant.description;
      state.type = data.restaurant.type;
      state.rate = data.restaurant.rate;
      state.address = data.restaurant.address;
      state.latitude = data.restaurant.location[0].latitude;
      state.longitude = data.restaurant.location[0].longitude;

      // state.openingHours = data.restaurant.openingHours;
      //Set state
      this.setState(state);
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    //ADD
    if (this.props.match.params.id === "new") {
      //Call Backend
      const obj = {
        ...this.state,
      };
      await axios.post("http://192.168.1.71:8080/admin/addProduct", obj);
    } else {
      //EDit
      const obj = {
        ...this.state,
      };

      await axios.put(
        "http://192.168.1.71:8080/admin/restaurants/" +
          this.props.match.params.id,
        obj
      );
    }

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

  handleOptionChange = () => {
    let type = document.getElementById("type");
    let value = type.options[type.selectedIndex].value;
    console.log(value);

    //Clone
    let state = { ...this.state };
    //Edit
    state["type"] = value;
    // Set state
    this.setState(state);
  };

  handleTimeChange = (name, value) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[name] = value;
    //Set state
    this.setState(state);
  };

  render() {
    return (
      <div className="wrapper">
        {/* <h1>
          {this.props.match.params.id === "new"
            ? "Add Product"
            : "Edit Product"}
        </h1> */}
        <div class="title">
          {this.props.match.params.id === "new"
            ? "Add Product"
            : "Edit Product"}
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
            <label>Latitude</label>
            <input
              id="latitude"
              name="latitude"
              type="number"
              className="input"
              onChange={this.handleChange}
              value={this.state.latitude}
            />
            {/* </div>
          <div className="inputfield"> */}
            <label>Longitude</label>
            <input
              id="longitude"
              name="longitude"
              type="number"
              className="input"
              onChange={this.handleChange}
              value={this.state.longitude}
            />
          </div>
          <div className="inputfield">
            <label>Address</label>
            <input
              id="address"
              name="address"
              type="text"
              className="input"
              onChange={this.handleChange}
              value={this.state.address}
            />
          </div>
          <div className="inputfield">
            <label>Image</label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="file"
              className="input"
              onChange={this.handleChange}
              value={this.state.imageUrl}
            />
          </div>
          <div className="inputfield">
            <label>Opening Hours</label>
            <input
              id="openTime"
              name="openTime"
              type="time"
              className="input"
              onChange={() => {
                let openTime = document.getElementById("openTime").value;
                this.handleTimeChange("openingHour", openTime);
              }}
            />
            {/* </div>
          <div className="inputfield"> */}
            <label>Closing Hours</label>
            <input
              id="closeTime"
              name="closeTime"
              type="time"
              className="input"
              onChange={() => {
                let closeTime = document.getElementById("closeTime").value;
                this.handleTimeChange("closingHour", closeTime);
              }}
            />
          </div>
          {this.props.match.params.id === "new" && (
            <div className="inputfield">
              <label>Type</label>
              <div className="custom_select">
                <select id="type" onChange={this.handleOptionChange}>
                  <option value="">Select</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="pharmacie">Pharmacie</option>
                  <option value="grocerie">Grocerie</option>
                </select>
              </div>
            </div>
          )}

          <div className="inputfield">
            <input
              type="submit"
              value={this.props.match.params.id === "new" ? "Add" : "Edit"}
              className="btn"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
