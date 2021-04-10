import {
  FIRST_IMG_INFO, SECOND_IMG_INFO, THIRD_IMG_INFO, START_LOADING, STOP_LOADING
} from './actionType';

export const MODULE_NAME = 'renderImg';
export const selectFirstImgInfo = (state) => state[MODULE_NAME].firstImgInfo;
export const selectSecondImgInfo = (state) => state[MODULE_NAME].secondImgInfo;
export const selectThirdImgInfo = (state) => state[MODULE_NAME].thirdImgInfo;
export const selectLoading = (state) => state[MODULE_NAME].loading;

const initialState = {
  loading: false,
  info: {
    firstImgInfo: [],
    secondImgInfo: [],
    thirdImgInfo: [],
  }
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FIRST_IMG_INFO:
      return {
        ...state,
        firstImgInfo: [...payload]
      }
    case SECOND_IMG_INFO:
      return {
        ...state,
        secondImgInfo: [...payload]
      }
    case THIRD_IMG_INFO:
      return {
        ...state,
        thirdImgInfo: [...payload]
      }
    case START_LOADING:
      return {
        ...state,
        loading: true
      }
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      }
    default:
      return {
        ...state
      }
  }
}