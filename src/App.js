import React, { Component } from 'react'
import { getVents } from './actions'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount () {
    this.props.getVents()
  }

  render () {
    return <div>test</div>
  }
}

function mapStateToProps (state) {
  return {
    xyz: state.vents
  }
}

const mapDispatchToProps = {
  getVents
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
