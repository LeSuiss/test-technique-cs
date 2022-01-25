import React from 'react'
import DoughnutGraph from '../components/DoughnutGraph'
import data from '../API/data.json'
import { with2Decimals } from '../utils/numbers'
import { getRainBowColors } from '../utils/getRainbowColors'

const OverviewingData = () => {

  const colors = getRainBowColors(Object.values(data).length)

  function getMedium(arrayOfEntities) {

    const sum = arrayOfEntities
      .reduce((acc, current) => acc + current.ponderation * current.valeurChoix, 0)

    const medium = sum / arrayOfEntities.length

    //return medium with 2 decimals max
    return medium
  }

  const dataFields = Object.keys(data)
    .map(fieldName => ({ name: fieldName, medium: getMedium(data[fieldName]) }))
    .sort((a, b) => b.medium - a.medium)

  const globalScore = Object.values(data)
    .reduce((acc, current) => acc + getMedium(current), 0)

  const globalMedium = globalScore / Object.values(data).length

  return (
    <>
      <h2>
        You get a global score of : {with2Decimals(globalMedium)} / {Object.values(data).length}
      </h2>

      <div id="detailedScoreContainer">
        <table>
          <thead>
            <tr>
              <td />
              <td>category</td>
              <td>medium </td>
            </tr>
          </thead>
          <tbody>
            {dataFields.map((field, index) =>
              <tr key={`key_${field.name}`}>
                <td style={{ backgroundColor: colors[index], width: '20px' }} />
                <td>
                  {field.name}
                </td>
                <td>
                  {with2Decimals(field.medium)}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <DoughnutGraph
          data={dataFields.map(field => with2Decimals(field.medium))}
          colors={colors}
        />

      </div>
    </>
  )
}

export default OverviewingData
