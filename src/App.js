import React, { Component } from 'react'
import { getVents } from './actions'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount () {
    this.props.getVents()
  }

  render () {
    const { xyz } = this.props

    const vents = xyz && xyz
      .map(vent => <p>{vent.name}</p>)

    return <div>{vents}</div>
  }
}

function mapStateToProps (state) {
  return {
    xyz: state
  }
}

const mapDispatchToProps = {
  getVents
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
