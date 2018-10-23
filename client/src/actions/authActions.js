import axios from 'axios'
import { GET_ERRORS } from './types'

// Register User
export function registerUser(userData, history) {
  return dispatch => {
    axios
      .post('/api/users/register', userData)
      .then(response => history.push('/login'))
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      })
  }
}