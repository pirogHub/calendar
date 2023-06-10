import dayjs from "dayjs"
import { checkIsEqualDays } from "../../../util"
import { styled } from "styled-components"

import cn from "classnames"
const Day = ({ day, rowIdx }) => {

  function getCurrentDayCtyle() {
    return checkIsEqualDays(day, dayjs())

  }


  return (
    <DayWrapper>

      <div className="day_name">
        {day.format("ddd")[0].toUpperCase()}
      </div>

      <div
        className={cn("day_num_wrapper", {
          "currentDay": getCurrentDayCtyle()
        })}
      >
        <div className="day_num_abs_container" >

          <DayNum
          // className={getCurrentDayCtyle() ? "currentDay" : ""}
          >{day.format("DD")}
          </DayNum>
          <div
            className="circle"
          ></div>
        </div>
      </div>


    </DayWrapper>

  )
}

export default Day


const DayNum = styled.span`
    
    --fz: ${props => props.theme.fz.replace(/[^0-9]/g, "")};
    display: inline-flex;
 
    justify-content: center;
    align-items: center;
    font-size: calc(var(--fz) * 1rem);

    
   
`


const DayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
    height: 90px;
    /* font-size: 1.2rem; */
    font-size: ${props => props.theme.fzsm};
    padding-bottom: 0;
    text-align:center;
    position:relative;

    .day_name {
      flex: 1;
    }

    .day_num_wrapper {
      flex: 2;

      position: relative;

      .day_num_abs_container{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      & .circle {
        position: absolute;
        z-index:-1;
        width: 3.1rem;
        height: 3.1rem;
    }
    }

    .day_num_wrapper.currentDay { 

      ${DayNum} {
      color: ${props => props.theme.color_active_invert};
    }

     .circle {
        position: absolute;
        z-index:-1;
        background: ${props => props.theme.color_active};
        border-radius: 50px;
        border: 1px solid ${props => props.theme.color_active};
    
    }

   
    }


    @media all and (max-width: 600px) {
      height: 90px;
    }

    @media all and (max-width: 400px) {
      height: 90px;
    }
    @media all and (max-width: 360px) {
      height: 75px;
    }

    @media all and (max-width: 320px) {
      height: 70px;
    } 

   

`
