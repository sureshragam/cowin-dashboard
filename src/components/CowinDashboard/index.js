// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstrains = {
  Initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {cowinData: [], apiStatus: apiStatusConstrains.Initial}

  componentDidMount() {
    this.getCowinData()
  }

  onSuccessFetch = data => {
    const UpdatedData = {
      lastSevenDaysVaccination: data.last_7_days_vaccination,
      vaccinationByAge: data.vaccination_by_age,
      vaccinationByGender: data.vaccination_by_gender,
    }
    this.setState({
      cowinData: UpdatedData,
      apiStatus: apiStatusConstrains.success,
    })
  }

  onFailureFetch = () => {
    this.setState({apiStatus: apiStatusConstrains.failure})
  }

  getCowinData = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      this.onSuccessFetch(data)
    } else {
      this.onFailureFetch()
    }
  }

  renderCharts = () => {
    const {cowinData} = this.state

    return (
      <>
        <h1>CoWIN Vaccination in India</h1>
        <VaccinationCoverage data={cowinData.lastSevenDaysVaccination} />
        <VaccinationByGender data={cowinData.vaccinationByGender} />
        <VaccinationByAge data={cowinData.vaccinationByAge} />
      </>
    )
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderLoadingView = () => (
    <div className="loading-view-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstrains.Initial:
        return this.renderLoadingView()
      case apiStatusConstrains.success:
        return this.renderCharts()
      case apiStatusConstrains.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowin-dashboard-container">
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1>Co-WIN</h1>
        </nav>

        {this.renderData()}
      </div>
    )
  }
}

export default CowinDashboard
