import axios from 'axios'
import {
  setFirstImgInfo, setSecondImgInfo, setThirdImgInfo, setStartLoading, setStopLoading
} from './actionCreation'
import { getHeader, BASE_ENDPOINT } from '../../utils/constans/constans'

export const getInfoFirstImg = () => (dispatch) => {
  dispatch(setStartLoading())
  const headers = getHeader();
  const arr = [];
  axios.get(BASE_ENDPOINT, {headers})
    .then((data) => {
      if (data.status === 200) {
        arr.push(data.data)
        dispatch(setFirstImgInfo(arr))
      }
    })
    .catch((error) => error.response)
  axios.get(BASE_ENDPOINT, {headers})
    .then((data) => {
      if (data.status === 200) {
        arr.push(data.data)
        dispatch(setFirstImgInfo(arr))
      }
    })
    .catch((error) => error.response)
}
export const getInfoSecondImg = () => (dispatch) => {
  const headers = getHeader();
  const arr = [];
  axios.get(BASE_ENDPOINT, {headers})
    .then((data) => {
      if (data.status === 200) {
        arr.push(data.data)
        dispatch(setSecondImgInfo(arr))
      }
    })
    .catch((error) => error.response)
  axios.get(BASE_ENDPOINT, {headers})
    .then((data) => {
      if (data.status === 200) {
        arr.push(data.data)
        dispatch(setSecondImgInfo(arr))
      }
    })
    .catch((error) => error.response)
}
export const getInfoThirdImg = () => (dispatch) => {
  const headers = getHeader();
  const arr = [];
  axios.get(BASE_ENDPOINT, {headers})
    .then((data) => {
      if (data.status === 200) {
        arr.push(data.data)
        dispatch(setThirdImgInfo(arr))
      }
    })
    .catch((error) => error.response)
  axios.get(BASE_ENDPOINT, {headers})
    .then((data) => {
      if (data.status === 200) {
        arr.push(data.data)
        dispatch(setThirdImgInfo(arr))
      }
    })
    .catch((error) => error.response)
    .finally(() => dispatch(setStopLoading()))
}