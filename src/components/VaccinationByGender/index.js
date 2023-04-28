// Write your code here
import {Legend, PieChart, Pie, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props
  return (
    <div className="row">
      <h1>Vaccination by gender</h1>

      <PieChart margin={{bottom: 20}} width={1000} height={300}>
        <Pie
          data={data}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}
export default VaccinationByGender
