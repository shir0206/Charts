import React from "react";
import ReactDOM from "react-dom";
import Chart from "./components/Chart";

import "./styles.css";

class App extends React.Component {
  state = {
    chartData: {}
  };

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "TV Action & Adventure",
          "TV Comedies",
          "TV Dramas",
          "CrimeTV Shows",
          "Kids'TV",
          "RomanticTV Shows"
        ],
        datasets: [
          {
            label: "# of TV-Shows in Israel",
            data: [3, 1, 5, 3, 0, 0],

            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)"
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235,1)",
              "rgba(54, 162, 235, 1)"
            ],

            borderWidth: 1
          },
          {
            label: "# of TV-Shows in Japan",
            data: [3, 6, 19, 12, 13, 17],

            backgroundColor: [
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ],
            borderColor: [
              "rgba(255, 206, 86, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 206, 86, 1)"
            ],
            borderWidth: 1
          },
          {
            label: "# of TV-Shows in United Kingdom",
            data: [3, 35, 22, 42, 12, 9],

            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)"
            ],
            borderWidth: 1
          },
          {
            label: "# of TV-Shows in United States",
            data: [65, 188, 169, 99, 138, 23],

            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)"
            ],
            borderWidth: 1
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Number of TV-Shows in Netflix</h1>
        <Chart chartData={this.state.chartData} displayLegend={false} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
