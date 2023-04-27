// Write your code here
import {ResponsiveContainer, Legend, PieChart, Pie, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {data} = props
  return (
    <div className="row">
      <h1>Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={data}
            startAngle={0}
            endAngle={360}
            innerRadius="0"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
