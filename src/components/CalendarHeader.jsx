
import { styled } from "styled-components"
import CreateEventButton from "./ui/CreateEventButton"
import { StyledBtn } from "./ui/StyledBtn"
const CalendarHeader = () => {
    return (
        <StyledCalendarHeader>
            <StyledBtn
                $notWFull
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
     min-height: 128px;
    padding: 0px;
    padding-inline: 48px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    /* background-color: #f00; */
    align-items: center;

    @media all and (max-width: 600px) {
        min-height: 110px;
    }

    @media all and (max-width: 400px) {
        min-height: 100px;
    }

    @media all and (max-width: 320px) {
        min-height: 80px;
    }


`