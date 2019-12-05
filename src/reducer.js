import { VENTS } from './actions'

export default function reducer (
  state = [], action = {}
) {
  switch (action.type) {
    case VENTS:
      return action.payload
    default:
      return state
  }
}
