import React from "react";
import { Bar, Line, Pie, Radar, Polar, Bubble, Scatter } from "react-chartjs-2";

function Chart(props) {
  return (
    <div className="chart">
      <Bar
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Bar Chart",
            fontSize: 25
          },
          legend: {
            display: true,
            position: props.legendPosition,
            labels: {
              fontColor: "#000"
            }
          }
        }}
      />
      <Line
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Area Chart",
            fontSize: 25
          },
          legend: {
            display: true,
            position: props.legendPosition,
            labels: {
              fontColor: "#000"
            }
          }
        }}
      />
      <Pie
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Pie Chart",
            fontSize: 25
          },
          legend: {
            display: true,
            position: props.legendPosition,
            labels: {
              fontColor: "#000"
            }
          }
        }}
      />
      <Radar
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Radar Chart",
            fontSize: 25
          },
          legend: {
            display: true,
            position: props.legendPosition,
            labels: {
              fontColor: "#000"
            }
          }
        }}
      />
      <Polar
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Polar Chart",
            fontSize: 25
          },
          legend: {
            display: true,
            position: props.legendPosition,
            labels: {
              fontColor: "#000"
            }
          }
        }}
      />
      <Scatter
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Scatter Chart",
            fontSize: 25
          },
          legend: {
            display: true,
            position: props.legendPosition,
            labels: {
              fontColor: "#000"
            }
          },
          showLines: false
        }}
      />
    </div>
  );
}

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: true,
  legendPosition: "bottom"
};

export default Chart;
