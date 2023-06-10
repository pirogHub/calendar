import dayjs from "dayjs"
import { checkIsEqualDays } from "../../../util"
import { styled } from "styled-components"
const Day = ({ day, rowIdx }) => {

  function getCurrentDayCtyle() {
    return checkIsEqualDays(day, dayjs())

  }


  return (
    <DayWrapper>

      <div className="day_name">
        {day.format("ddd")[0].toUpperCase()}
      </div>

      <div className="day_num_wrapper">

        <DayNum
          className={getCurrentDayCtyle() ? "currentDay" : ""}
        >{day.format("DD")}
        </DayNum>
      </div>


    </DayWrapper>

  )
}

export default Day


const DayWrapper = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
    height: 120px;
    /* font-size: 1.2rem; */
    font-size: ${props => props.theme.fzsm};
    padding-bottom: 0;

    .day_name {
      flex: 1;
    }

    .day_num_wrapper {
      flex: 2;
    }

`
const DayNum = styled.span`
    
    --fz: ${props => props.theme.fz.replace(/[^0-9]/g, "")};

    display: inline-flex;
    width: 3.5rem;
    height: 3.5rem;
    /* height: 3.5rem;
    width: 3.5rem; */
    justify-content: center;
    align-items: center;
    font-size: calc(var(--fz) * 1rem);

    
    &.currentDay {
        background-color: ${props => props.theme.color_active};
        border-radius: 50px;
        color: ${props => props.theme.color_active_invert};
    }
`