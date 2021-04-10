import img0 from '../imgs/img0.jpg';
import img1 from '../imgs/img1.jpg';
import img2 from '../imgs/img2.jpg';

export const checkForEven = (thirdImgInfo, firstImgInfo, secondImgInfo, setIsEven, isEven) => {
  if (thirdImgInfo !== undefined) {
    if (thirdImgInfo[1] !== undefined) {
      const isEvenFirstArray = Number.isInteger(firstImgInfo
        .reduce((acc, item) => acc + item) / 2);
      const isEvenSecondArray = Number.isInteger(secondImgInfo
        .reduce((acc, item) => acc + item) / 2);
      const isEvenThirdArray = Number.isInteger(thirdImgInfo
        .reduce((acc, item) => acc + item) / 2);
      setIsEven({
        ...isEven,
        first: isEvenFirstArray,
        second: isEvenSecondArray,
        third: isEvenThirdArray
      })
    }
  }
}
export const checkForAllEmpty = (isEven) => {
  const res = Object.values(isEven).every((item) => item === false)
  if (res) {
    return false
  }
  return true
}

export const getImgs = (i) => {
  switch (i) {
    case (0):
      return img0
    case (1):
      return img1
    case (2):
      return img2
    default:
      return i
  }
}