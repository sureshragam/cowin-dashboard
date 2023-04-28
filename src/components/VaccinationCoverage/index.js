// Write your code here
import {BarChart, XAxis, YAxis, Bar, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props
  console.log(data)
  const dataFormatter = number => {
    if (number > 0) {
      return `${number.toString()}k`
    }
    return `${number.toString()}`
  }
  return (
    <div className="row">
      <h1>Vaccination Coverage</h1>
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{top: 5, bottom: 15}}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <Legend />
        <Bar dataKey="dose_1" name="Dose 1" barSize="20%" fill=" #5a8dee" />
        <Bar dataKey="dose_2" name="Dose 2" barSize="20%" fill="#f54394" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
