import react from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
const Chart = (props) => {
  return (
    <div className='chart'>
      {props.datapoint.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          label={datapoint.label}
          maxvalue={null}
          key={datapoint.label}
        />
      ))}
    </div>
  )
}
export default Chart
