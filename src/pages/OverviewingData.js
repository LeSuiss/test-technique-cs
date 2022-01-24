import React from 'react'
import DoghnutGraph from '../components/DoghnutGraph'
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
      <table>
        {fieldMediums.map(field =>
          <td>
            <tr>
              {field.name}
            </tr>

            <tr>
              {field.medium}
            </tr>
          </td>
        )}
      </table>
      <h2>
        OverAll Sum : {globalSum}
      </h2>
      <DoghnutGraph graphData={fieldMediums.map(field => field.medium)} />
    </>
  )
}

export default OverviewingData
