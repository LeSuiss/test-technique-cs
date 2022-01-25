import React from 'react'
import Chart from "react-apexcharts";

const DoughnutGraph = ({ data, colors }) => {

  return <Chart
    series={data}
    type="donut"
    width="380"
    options={{
      colors: colors,
      legend: { show: false },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return '<div class="arrow_box">' +
            '<span > ' + series[seriesIndex] + ' / 5  </span>' +
            '</div>'
        }
      }
    }}
  />
}

export default DoughnutGraph
