import React from 'react'
import DoughnutGraph from '../components/DoughnutGraph'
import data from '../data.json'
import { with2Decimals } from '../utils/numbers'

const OverviewingData = () => {

  function getMedium(arrayOfEntities) {

    const sum = arrayOfEntities
      .reduce((acc, current) => acc + current.ponderation * current.valeurChoix, 0)

    const medium = sum / arrayOfEntities.length

    //return medium with 2 decimals max
    return with2Decimals(medium)
  }

  const fieldMediums = Object.keys(data).map(fieldName => ({ name: fieldName, medium: getMedium(data[fieldName]) }))
  const globalSum = with2Decimals(Object.values(data)
    .reduce((acc, current) => acc + getMedium(current), 0))

  return (
    <>
      <h2>
        OverAll Sum : {globalSum}
      </h2>

      <table>
        <tbody>

          {fieldMediums.map(field =>
            <>
              <tr>
                <td>

                </td>
                {field.name}

                <td>
                  {field.medium}
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>

      <div id='graphContainer'>

        <DoughnutGraph
          data={fieldMediums.map(field => field.medium)}
          labels={fieldMediums.map(field => field.name)}
        />
      </div>
    </>
  )
}

export default OverviewingData
