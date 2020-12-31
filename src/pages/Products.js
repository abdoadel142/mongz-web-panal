import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";

class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("http://192.168.1.71:8080/admin/getProducts")
      // , {
      // headers: {
      //   Authorization: 'Bearer ' + this.props.token
      // }
      // })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch user status.");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData.posts);
        this.setState({
          products: resData.posts.map((post) => {
            return {
              ...post,
            };
          }),
        });
      })
      .catch(this.catchError);
  }

  handleDelete = async (product) => {
    const oldProducts = [...this.state.products];
    const products = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products });

    try {
      // await axios.delete(
      //   "https://iti-react-cource.herokuapp.com/products/" + product.id
      // );
    } catch (ex) {
      this.setState({ products: oldProducts });
    }
  };

  getClasses() {
    return this.props.product.count === 0
      ? "badge badge-warning m-2"
      : "badge badge-primary m-2";
  };

  componentWillUnmount() {
    // console.log("Product ==> UNMOUNT");
  }

  render() {
    const { products, onDelete } = this.state;
    return (
      <React.Fragment>
        <h1>Admin</h1>
        <button
          onClick={() => this.props.history.push("/productform/new")}
          className="btn btn-primary"
        >
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.content}</td>
                <td>
                  <i
                    onClick={() =>
                      this.props.history.push(`/productform/${product.id}`)
                    }
                    className="fas fa-edit"
                  ></i>
                </td>
                <td>
                  <i
                    onClick={() => onDelete(product)}
                    className="fas fa-trash"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
      // <div className="row">
      //   <div className="col-2">
      //     <span>
      //       <Link to={`/products/${product.id}`}>{product.name}</Link>
      //     </span>
      //   </div>
      //   <div className="col">
      //     <span className={this.getClasses()}>{product.count}</span>
      //     <button
      //       onClick={() => onIncrement(product)}
      //       className="btn btn-primary btn-sm"
      //     >
      //       +
      //     </button>
      //     <span style={{ cursor: "pointer" }} onClick={() => onDelete(product)}>
      //       <i className="fas fa-trash m-2"></i>
      //     </span>
      //   </div>
      // </div>
    );
  }
}

export default Products;
