import React, { Component } from "react";
import axios from "axios";
import "../components/Card.css";

class Restaurants extends Component {
  state = {
    restaurants: [],
  };

  componentDidMount() {
    fetch("http://192.168.1.67:8080/admin/getProducts")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch user status.");
        }
        return res.json();
      })
      .then((result) => {
        this.setState({
          restaurants: result.restaurants.map((restaurant) => {
            return {
              ...restaurant,
            };
          }),
        });
        this.state.restaurants.map((product) => {
          console.log(product.name + " - " + product._id);
        });
      })
      .catch(this.catchError);
  }

  onDelete = async (restaurant) => {
    console.log(restaurant);
    const oldrestaurants = [...this.state.restaurants];
    const restaurants = this.state.restaurants.filter(
      (p) => p._id !== restaurant._id
    );
    this.setState({ restaurants });
    try {
      await axios.delete(
        "http://192.168.1.67:8080/admin/restaurants/" + restaurant._id
      );
    } catch (ex) {
      this.setState({ restaurants: oldrestaurants });
    }
  };

  getClasses() {
    return this.props.product.count === 0
      ? "badge badge-warning m-2"
      : "badge badge-primary m-2";
  }

  render() {
    const { restaurants } = this.state;
    return (
      <>
        <main class="page-content">
        {/* <div class="content-wrapper"> */}
          <div class="container">
            <h2>Restaurants</h2>
            <hr />
            {/* <div class="row"> */}
            <button
              onClick={() => this.props.history.push("/productform/new")}
              className="btn btn-primary"
            >
              Add New Restaurant
            </button>
            {/* </div> */}
          </div>
          {/* <div class="form-group col-md-12">
            <div class="alert alert-success" role="alert">
              <button
                onClick={() => this.props.history.push("/productform/new")}
                className="btn btn-primary"
              >
                Add New Restaurant
              </button>
            </div>
          </div> */}
          {/* </div> */}

          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Address</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.address}</td>
                  <td>{product.rate}</td>
                  <td>
                    <i
                      onClick={() =>
                        this.props.history.push(`/productform/${product._id}`)
                      }
                      className="fas fa-edit"
                    ></i>
                  </td>
                  <td>
                    <i
                      onClick={() => {
                        this.onDelete(product);
                      }}
                      className="fas fa-trash"
                    ></i>
                  </td>
                  <td>
                    <i
                      onClick={() =>
                        this.props.history.push(`/menuform/${product._id}`)
                      }
                      className="fas fa-plus"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        {/* </div> */}
        </main>
      </>
    );
  }
}

export default Restaurants;
