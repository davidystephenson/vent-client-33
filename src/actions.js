const superagent = require('superagent')

export const VENTS = 'VENTS'

function gotVents (vents) {
  return {
    type: VENTS,
    payload: vents
  }
}

export function getVents () {
  return function (dispatch) {
    superagent
      .get('http://localhost:4000/vent')
      .then(response => {
        const { body } = response

        const action = gotVents(body)

        dispatch(action)
      })
  }
}
