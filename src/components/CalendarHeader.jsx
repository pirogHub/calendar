
import { styled } from "styled-components"
import CreateEventButton from "./ui/CreateEventButton"
import { StyledBtn } from "./ui/StyledBtn"
const CalendarHeader = () => {
    return (
        <StyledCalendarHeader>
            <StyledBtn
                $isNotActivity
            >
                Calendar
            </StyledBtn>

            <CreateEventButton />
        </StyledCalendarHeader>

    )
}

export default CalendarHeader


const StyledCalendarHeader = styled.header`
     min-height: 148px;
    padding: 10px;
    /* padding-inline: 60px; */
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    /* background-color: #f00; */
    align-items: center;

`