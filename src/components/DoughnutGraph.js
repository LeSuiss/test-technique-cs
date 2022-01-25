import React from 'react'
import Chart from "react-apexcharts";

const DoughnutGraph = ({ dataFields, colors }) => {

  return <Chart
    series={dataFields.map(category => category.points)}
    type="donut"
    width="380"
    options={{
      colors: colors,
      legend: { show: false },
      title: { text: "overall score" },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return '<div class="arrow_box">' +
            '<span > ' + series[seriesIndex] + ' / ' + dataFields[seriesIndex].maxPoints + ' </span>' +
            '</div>'
        }
      }
    }}
  />
}

export default DoughnutGraph
