import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getRandomColor } from '../utils/getRandomColor';


const DoughnutGraph = ({ data = [1, 2, 4], labels }) => {

  ChartJS.register(ArcElement, Tooltip, Legend);



  //set array of Color
  const colors = Object.values(data).map(color => getRandomColor())
  // same but changin opacity from 0.2 to 1
  const borderColor = colors.map(color => color.slice(0, color.length - 5) + '1)')

  const graphData = {
    labels: labels,
    datasets: [
      {
        label: labels ?? null,
        data: data,
        backgroundColor: colors,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
    options: {
      plugins: {
        datalabels: {
          display: true,
          backgroundColor: '#ccc',
          borderRadius: 3,
          font: {
            color: 'red',
            weight: 'bold',
          }
        },
        doughnutlabel: {
          labels: [{
            text: '550',
            font: {
              size: 20,
              weight: 'bold'
            }
          }, {
            text: 'total'
          }]
        }
      }

    }
  }


  return <Doughnut data={graphData} />
}

export default DoughnutGraph
