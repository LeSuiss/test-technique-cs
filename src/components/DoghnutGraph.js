import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { getRandomColor } from '../utils/getRandomColor';


const DoghnutGraph = ({ data, label }) => {

  //set array of Color
  const colors = Object.values(data).map(color => getRandomColor())
  // same but changin opacity from 0.2 to 1
  const borderColor = colors.map(color => color.slice(0, color.length - 5) + '1)')

  const graphData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: label ?? null,
        data: data,
        backgroundColor: colors,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };


  return <Doughnut data={graphData} />
}

export default DoghnutGraph
