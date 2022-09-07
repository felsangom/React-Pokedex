import { useEffect, useState } from 'react'
import { VictoryArea, VictoryChart, VictoryGroup, VictoryLabel, VictoryPolarAxis, VictoryTheme } from 'victory'
import { pokemonStats } from '../../dataTypes/dataTypes'

type pokemonStatsChartProps = {
  pokemonStats: pokemonStats[]
}

const PokemonStatsChart = (props: pokemonStatsChartProps): JSX.Element => {
  const [ maxValue, setMaxValue ] = useState(0)

  useEffect((): void => {
    let max:number = Math.max(...props.pokemonStats.map(stat => stat.base_stat))
    setMaxValue(max)
  }, [props])

  const chartStats = () => {
    return props.pokemonStats.map(stat => ({ x: stat.stat.name, y: stat.base_stat / maxValue }))
  }

  return (
    <VictoryChart polar theme={VictoryTheme.material} domain={{ y: [ 0, 1] }}>
      <VictoryGroup
        colorScale={['tomato']}
        style={{
          data: {
            fillOpacity: 0.2,
            strokeWidth: 2
          }
        }}>

        <VictoryArea data={chartStats()} />
      </VictoryGroup>

      {props.pokemonStats.map((stat: pokemonStats, index: number) => {
        return (
          <VictoryPolarAxis
            key={index}
            dependentAxis
            style={{
              axisLabel: { padding: 10, fontSize: 16 },
              axis: { stroke: 'none' },
              grid: { stroke: 'gray', strokeWidth: 0.25, opacity: 0.5 }
            }}
            tickLabelComponent={
              <VictoryLabel labelPlacement='vertical' />
            }
            labelPlacement='perpendicular'
            axisValue={index + 1}
            label={stat.stat.name}
            tickFormat={t => Math.ceil(t * maxValue)}
            tickValues={[0.25, 0.5, 0.75]} />
        )
      })}
    </VictoryChart>
  )
}

export default PokemonStatsChart
