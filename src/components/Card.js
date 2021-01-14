import "./Card.css";
// import { Link } from "react-router-dom";
import React, { Component } from "react";
// import $ from "jquery";
import Chart from "chart.js";

class Card extends Component {
  componentDidMount() {
    // Start chart
    var chart = document.getElementById("myChart");
    Chart.defaults.global.animation.duration = 2000; // Animation duration
    Chart.defaults.global.title.display = false; // Remove title
    Chart.defaults.global.title.text = "Chart"; // Title
    Chart.defaults.global.title.position = "bottom"; // Title position
    Chart.defaults.global.defaultFontColor = "#999"; // Font color
    Chart.defaults.global.defaultFontSize = 10; // Font size for every label

    // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
    Chart.defaults.global.tooltips.borderColor = "white"; // Tooltips border color
    Chart.defaults.global.legend.labels.padding = 0;
    Chart.defaults.scale.ticks.beginAtZero = true;
    Chart.defaults.scale.gridLines.zeroLineColor = "rgba(255, 255, 255, 0.1)";
    Chart.defaults.scale.gridLines.color = "rgba(255, 255, 255, 0.02)";
    Chart.defaults.global.legend.display = false;

    var myChart = new Chart(chart, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "Jul"],
        datasets: [
          {
            label: "Lost",
            fill: false,
            lineTension: 0,
            data: [45, 25, 40, 20, 45, 20],
            pointBorderColor: "#4bc0c0",
            borderColor: "#4bc0c0",
            borderWidth: 2,
            showLine: true,
          },
          {
            label: "Succes",
            fill: false,
            lineTension: 0,
            startAngle: 2,
            data: [20, 40, 20, 45, 25, 60],
            // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
            backgroundColor: "transparent",
            pointBorderColor: "#ff6384",
            borderColor: "#ff6384",
            borderWidth: 2,
            showLine: true,
          },
        ],
      },
    });

    //  Chart ( 2 )
    var Chart2 = document.getElementById("myChart2").getContext("2d");
    var chart = new Chart(Chart2, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "test",
          "test",
          "test",
          "test",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 79, 116)",
            borderWidth: 2,
            pointBorderColor: false,
            data: [5, 10, 5, 8, 20, 30, 20, 10],
            fill: false,
            lineTension: 0.4,
          },
          {
            label: "Month",
            fill: false,
            lineTension: 0.4,
            startAngle: 2,
            data: [20, 14, 20, 25, 10, 15, 25, 10],
            // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
            backgroundColor: "transparent",
            pointBorderColor: "#4bc0c0",
            borderColor: "#4bc0c0",
            borderWidth: 2,
            showLine: true,
          },
          {
            label: "Month",
            fill: false,
            lineTension: 0.4,
            startAngle: 2,
            data: [40, 20, 5, 10, 30, 15, 15, 10],
            // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
            backgroundColor: "transparent",
            pointBorderColor: "#ffcd56",
            borderColor: "#ffcd56",
            borderWidth: 2,
            showLine: true,
          },
        ],
      },

      // Configuration options
      options: {
        title: {
          display: false,
        },
      },
    });

    // var chart = document.getElementById("chart3");
    // var myChart = new Chart(chart, {
    //   type: "line",
    //   data: {
    //     labels: [
    //       "One",
    //       "Two",
    //       "Three",
    //       "Four",
    //       "Five",
    //       "Six",
    //       "Seven",
    //       "Eight",
    //     ],
    //     datasets: [
    //       {
    //         label: "Lost",
    //         fill: false,
    //         lineTension: 0.5,
    //         pointBorderColor: "transparent",
    //         pointColor: "white",
    //         borderColor: "#d9534f",
    //         borderWidth: 0,
    //         showLine: true,
    //         data: [0, 40, 10, 30, 10, 20, 15, 20],
    //         pointBackgroundColor: "transparent",
    //       },
    //       {
    //         label: "Lost",
    //         fill: false,
    //         lineTension: 0.5,
    //         pointColor: "white",
    //         borderColor: "#5cb85c",
    //         borderWidth: 0,
    //         showLine: true,
    //         data: [40, 0, 20, 10, 25, 15, 30, 0],
    //         pointBackgroundColor: "transparent",
    //       },
    //       {
    //         label: "Lost",
    //         fill: false,
    //         lineTension: 0.5,
    //         pointColor: "white",
    //         borderColor: "#f0ad4e",
    //         borderWidth: 0,
    //         showLine: true,
    //         data: [10, 40, 20, 5, 35, 15, 35, 0],
    //         pointBackgroundColor: "transparent",
    //       },
    //       {
    //         label: "Lost",
    //         fill: false,
    //         lineTension: 0.5,
    //         pointColor: "white",
    //         borderColor: "#337ab7",
    //         borderWidth: 0,
    //         showLine: true,
    //         data: [0, 30, 10, 25, 10, 40, 20, 0],
    //         pointBackgroundColor: "transparent",
    //       },
    //     ],
    //   },
    // });
  }

  render() {
    return (
      <>
        <div class="content-wrapper">
          <div class="container-fluid"></div>

          {/* <div class="form-group col-md-12">
            <div class="alert alert-success" role="alert"> */}
          <ol className="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">My Dashboard</li>
          </ol>
          {/* </div>
          </div> */}
          {/* <!-- Icon Cards--> */}
          <div class="rowCard">
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="card text-white bg-primary o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fa fa-fw fa-comments"></i>
                  </div>
                  <div class="mr-5">Messages</div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                  <span class="float-left">View Details</span>
                  <span class="float-right">
                    <i class="fa fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="card text-white bg-warning o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fa fa-fw fa-list"></i>
                  </div>
                  <div class="mr-5">Tasks</div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                  <span class="float-left">View Details</span>
                  <span class="float-right">
                    <i class="fa fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="card text-white bg-success o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fa fa-fw fa-shopping-cart"></i>
                  </div>
                  <div class="mr-5">Orders</div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                  <span class="float-left">View Details</span>
                  <span class="float-right">
                    <i class="fa fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="card text-white bg-danger o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fa fa-life-ring"></i>
                  </div>
                  <div class="mr-5">Products</div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                  <span class="float-left">View Details</span>
                  <span class="float-right">
                    <i class="fa fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <section class="charts">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6">
                  <div class="chart-container">
                    <h3></h3>
                    <canvas id="myChart"></canvas>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="chart-container">
                    <h3></h3>
                    <canvas id="myChart2"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <br />
          <br /> */}
          {/* <div class="form-group col-md-12">
            <div class="alert alert-success" role="alert">
              <h4 class="alert-heading">New !</h4>
              <p>New react pro sidebar library is now available on </p>
              <a
                href="https://github.com/azouaoui-med/react-pro-sidebar"
                target="_blank"
                class="btn btn-sm btn-primary mr-2"
              >
                Github
              </a>
              <a
                href="https://azouaoui-med.github.io/react-pro-sidebar"
                target="_blank"
                class="btn btn-sm btn-success"
              >
                Demo
              </a>
            </div>
          </div> */}
          {/* <section class="statis text-center">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  <div class="box bg-primary">
                    <i class="fa fa-eye"></i>
                    <h3>5,154</h3>
                    <p class="lead">Page views</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="box danger">
                    <i class="fa fa-user-o"></i>
                    <h3>245</h3>
                    <p class="lead">Users</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="box warning">
                    <i class="fa fa-shopping-cart"></i>
                    <h3>5,154</h3>
                    <p class="lead">Products</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="box success">
                    <i class="fa fa-handshake-o"></i>
                    <h3>5,154</h3>
                    <p class="lead">Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* <section class="statistics">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4">
                  <div class="box">
                    <i class="fa fa-envelope fa-fw bg-primary"></i>
                    <div class="info">
                      <h3>1,245</h3> <span>Emails</span>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box">
                    <i class="fa fa-file fa-fw danger"></i>
                    <div class="info">
                      <h3>34</h3> <span>Projects</span>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box">
                    <i class="fa fa-users fa-fw success"></i>
                    <div class="info">
                      <h3>5,245</h3> <span>Users</span>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          
          {/* <div class="welcome">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="content">
                    <h2>Welcome to Dashboard</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>*/}
          {/* <section class="chrt3">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-9">
                  <div class="chart-container">
                    <canvas id="chart3" width="100%"></canvas>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box"></div>
                </div>
              </div>
            </div>
          </section>  */}
        </div>

        {/* <footer class="sticky-footer">
          <div class="container">
            <div class="text-center">
              <small>© 2021 Mongz</small>
            </div>
          </div>
        </footer> */}
        {/* <!-- Scroll to Top Button--> */}
        {/* <a class="scroll-to-top rounded" href="#page-top">
        <i class="fa fa-angle-up"></i>
      </a> */}
        {/* </body> */}
      </>
    );
  }
}

export default Card;
