import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./Slidebar.css";
import $ from "jquery";
import "../pages/Restaurants";

class Slidebar extends Component {
  componentDidMount() {
    $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if ($(this).parent().hasClass("active")) {
        $(".sidebar-dropdown").removeClass("active");
        $(this).parent().removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this).next(".sidebar-submenu").slideDown(200);
        $(this).parent().addClass("active");
      }
    });

    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });

    // fetch("http://192.168.1.65:8080/profile/getAdminData")
    //   .then((res) => {
    //     if (res.status !== 200) {
    //       throw new Error("Failed to fetch user status.");
    //     }
    //     return res.json();
    //   })
    //   .then((result) => {
    //     this.setState({
    //       restaurants: result.restaurants.map((restaurant) => {
    //         return {
    //           ...restaurant,
    //         };
    //       }),
    //     });
    //     this.state.restaurants.map((product) => {
    //       console.log(product.name + " - " + product._id);
    //     });
    //   })
    //   .catch(this.catchError);
  }

  render() {
    return (
      <>
        {/* <IconContext.Provider value={{ color: "#fff" }}> */}
        {/* <div className="page-wrapper chiller-theme toggled"> */}
        <Link id="show-sidebar" className="btn btn-sm btn-dark" to="#">
          <i className="fas fa-bars"></i>
        </Link>
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand">
              <Link to="#">MONGZ Admin</Link>
              <div id="close-sidebar">
                <i className="fas fa-times"></i>
              </div>
            </div>
            <div className="sidebar-header">
              <div className="user-pic">
                <img
                  className="img-responsive img-rounded"
                  src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                  alt="User picture"
                />
              </div>
              <div className="user-info">
                <span className="user-name">
                  <strong>Roaa Gamal</strong>
                </span>
                <span className="user-role">Administrator</span>
                <span className="user-status">
                  <i className="fa fa-circle"></i>
                  <span>Online</span>
                </span>
              </div>
            </div>
            <div class="sidebar-search">
              <div>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control search-menu"
                    placeholder="Search..."
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-menu">
              <ul>
                <li className="header-menu">
                  <span>General</span>
                </li>

                <li>
                  <a href="/home">
                    <i className="fa fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-dropdown">
                  <a href="#">
                    <i className="fa fa-shopping-cart"></i>
                    <span>E-commerce</span>
                    <span class="badge badge-pill badge-danger">3</span>
                  </a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                      <a href="/restaurants">Restaurants</a>
                      </li>
                      <li>
                        <a href="/pharmacies">Pharmacies</a>
                      </li>
                      <li>
                        <a href="/groceries">Groceries</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="sidebar-dropdown">
                  <a href="#">
                    <i class="fa fa-chart-line"></i>
                    <span>Charts</span>
                    <span class="badge badge-pill badge-success">Pro</span>
                  </a>
                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Pie chart</a>
                      </li>
                      <li>
                        <a href="#">Line chart</a>
                      </li>
                      <li>
                        <a href="#">Bar chart</a>
                      </li>
                      <li>
                        <a href="#">Histogram</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <a href="#">
                    <i className="fa fa-globe"></i>
                    <span>Maps</span>
                    <span class="badge badge-pill badge-warning">New</span>
                  </a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Google maps</a>
                      </li>
                      <li>
                        <a href="#">Open street map</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="header-menu">
                  <span>Extra</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book"></i>
                    <span>Documentation</span>
                    <span className="badge badge-pill badge-primary">Beta</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-calendar"></i>
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-folder"></i>
                    <span>Examples</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* </div> */}
        {/* </IconContext.Provider> */}
      </>
    );
  }
}

export default Slidebar;
