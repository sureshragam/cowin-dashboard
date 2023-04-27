// Write your code here
import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  Legend,
} from 'recharts'

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
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data} margin={{top: 5, bottom: 15}}>
          <XAxis dataKey="vaccine_date" tick={{strokeWidth: 1}} />
          <YAxis tickFormatter={dataFormatter} />
          <Legend />
          <Bar dataKey="dose_1" name="Dose 1" barSize="20%" fill=" #5a8dee" />
          <Bar dataKey="dose_2" name="Dose 2" barSize="20%" fill="#f54394" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
