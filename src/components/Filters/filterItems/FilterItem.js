import React from 'react';
import '../filterItems/FilterItem.css';
import Popup from 'reactjs-popup';
import PopElement, { setAtomActive, setAtomCheckBox } from '../filterItems/filtertab/PopElement';
import { CiFilter } from "react-icons/ci";
import { setAtomTime, setAtomRating, setAtomPrice } from '../filterItems/filtertab/PopElement';
import { useRecoilValue, useResetRecoilState } from "recoil";


const FilterItem = ({filter}) => {
  
  const filterTime = useRecoilValue(setAtomTime);
  const filterRating = useRecoilValue(setAtomRating);
  const filterPrice = useRecoilValue(setAtomPrice);
 

  const resetTime = useResetRecoilState(setAtomTime);
  const resetRating = useResetRecoilState(setAtomRating);
  const resetPrice = useResetRecoilState(setAtomPrice);
  const resetCheckBox = useResetRecoilState(setAtomCheckBox);
  const resetActive = useResetRecoilState(setAtomActive);

  const handleResetFilters = () => {

    resetTime();
    resetRating();
    resetPrice();
    resetCheckBox();
    resetActive();

  };
  
  return (
    <>
    
    <div className='filter-item'>
      <Popup 
        trigger={
          <button className='filter-btn'>
            <div className='filter'>
              <CiFilter style={{fontSize: "30px"}}/>
            </div>{filter.title}
          </button>        
      } modal nested lockScroll >
        {
          close => (
            <div className='modal'>
              <div className='modal-page'>
                <div className='pop-nav'>
                  <h3>Make Your Filter</h3>
                  <button onClick={() => close()} className='pop-btn' >
                  <i className="fa-solid fa-circle-xmark"></i>
                  </button>
                </div>
                <PopElement />
              </div>
            </div>
          )
        }
      </Popup>
    </div>

    <div className='dyn-filter-btn'>
    {filterTime !== 50 && <button id="fil-btn-time">{filterTime + "+ Min"}</button>}
      {filterRating !== 5 && <button id="fil-btn-rating">{filterRating + "+ Rating"}</button>}
      {filterPrice !== 50 && <button id="fil-btn-price">{filterPrice + "+ Price"}</button>}
    <button className='reset' onClick={handleResetFilters}>Reset Filter</button>
  
    </div>
    </>
  )
}

export default FilterItem;