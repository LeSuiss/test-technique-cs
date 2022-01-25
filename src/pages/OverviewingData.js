import React from 'react'
import DoughnutGraph from '../components/DoughnutGraph'
import data from '../API/data.json'
import { with2Decimals } from '../utils/numbers'
import { getRainBowColors } from '../utils/getRainbowColors'

const OverviewingData = () => {

  const colors = getRainBowColors(Object.values(data).length)

  function getScores(arrayOfEntities) {

    const points = arrayOfEntities
      .reduce((acc, current) => acc + current.ponderation * current.valeurChoix, 0)

    const maxPoints = arrayOfEntities.reduce((acc, current) => acc + current.ponderation, 0)

    //return medium with 2 decimals max
    return {
      points: points,
      maxPoints: maxPoints,
      score: points / maxPoints
    }
  }

  const dataFields = Object.keys(data)
    .map(fieldName => ({ name: fieldName, ...getScores(data[fieldName]) }))
    .sort((a, b) => b.score - a.score)

  const globalPoints = Object.values(data)
    .reduce((acc, current) => acc + getScores(current).points, 0)

  const globalMaxPoints = Object.values(data).reduce((acc, current) => acc + getScores(current).maxPoints, 0)

  return (
    <>
      <h2>
        You get a global score of : {globalPoints}/{globalMaxPoints}
      </h2>

      <div id="detailedScoreContainer">
        <table>
          <thead>
            <tr>
              <td />
              <td>category</td>
              <td>score </td>
              <td>max</td>
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
                  {with2Decimals(field.points)}
                </td>
                <td>
                  {with2Decimals(field.maxPoints)}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <DoughnutGraph
          dataFields={dataFields}
          colors={colors}
        />

      </div>
    </>
  )
}

export default OverviewingData
