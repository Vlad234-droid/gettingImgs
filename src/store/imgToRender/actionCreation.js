import {
  FIRST_IMG_INFO, SECOND_IMG_INFO, THIRD_IMG_INFO, STOP_LOADING, START_LOADING
} from './actionType'

export const setFirstImgInfo = (payload) => ({
  type: FIRST_IMG_INFO,
  payload
})
export const setSecondImgInfo = (payload) => ({
  type: SECOND_IMG_INFO,
  payload
})
export const setThirdImgInfo = (payload) => ({
  type: THIRD_IMG_INFO,
  payload
})
export const setStartLoading = () => ({
  type: START_LOADING,
})
export const setStopLoading = () => ({
  type: STOP_LOADING,
})