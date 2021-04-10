/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getInfoFirstImg, getInfoSecondImg, getInfoThirdImg
} from '../store/imgToRender/middleware'
import {
  selectFirstImgInfo, selectSecondImgInfo, selectThirdImgInfo, selectLoading
} from '../store/imgToRender/reducer';
import {
  checkForEven, getImgs, checkForAllEmpty
} from '../utils/auxiliaryFucn/auxiliary';
import {
  RowsWrapper, MainWrapper, StyledSpin, StyledImg, Notification
} from './StyledImgRender';
import 'antd/dist/antd.css';

const mapStateToProps = (state) => ({
  firstImgInfo: selectFirstImgInfo(state),
  secondImgInfo: selectSecondImgInfo(state),
  thirdImgInfo: selectThirdImgInfo(state),
  loading: selectLoading(state)
})

const Imgrender = connect(mapStateToProps,
  { getInfoFirstImg, getInfoSecondImg, getInfoThirdImg })(({
  getInfoFirstImg, firstImgInfo, secondImgInfo, thirdImgInfo,
  getInfoSecondImg, getInfoThirdImg, loading
}) => {
  const [isEven, setIsEven] = useState({
    first: null,
    second: null,
    third: null
  });

  useEffect(() => {
    getInfoFirstImg();
    getInfoSecondImg();
    getInfoThirdImg();
  }, [getInfoFirstImg, getInfoSecondImg, getInfoThirdImg])

  useEffect(() => {
    checkForEven(thirdImgInfo, firstImgInfo, secondImgInfo, setIsEven, isEven)
  }, [firstImgInfo, secondImgInfo, thirdImgInfo])

  useEffect(() => {
    console.log(isEven);
  }, [isEven])

  return (
    <div>
      {checkForAllEmpty(isEven) ? (
        <MainWrapper>
          {Object.keys(isEven).map((item, i) => (
            <RowsWrapper even={isEven[item]} key={item}>
              {loading ? (<StyledSpin tip="Loading" size="large" />) : (<StyledImg src={getImgs(i)} alt="photo" even={isEven[item]} />)}
            </RowsWrapper>
          ))}
        </MainWrapper>
      ) : (
        <Notification>
          <h3>
            Unable to load pictures, try to reload the page
          </h3>
        </Notification>
      )}
    
    </div>
  );
})
export default Imgrender;
