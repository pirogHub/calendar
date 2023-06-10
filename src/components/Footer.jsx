import React from 'react'
import { useCalendar } from '../context/GlobalContext'
import { StyledBtn } from './ui/StyledBtn'
import { styled } from 'styled-components'



const Footer = () => {
    const { selectedHour,
        goToday,
        hourActivity_deleteAllHour,
        isSelectedHourHasActivity } = useCalendar()


    return (
        <StyledFooter>
            <div>
                <StyledBtn
                    onClick={goToday}
                >Today
                </StyledBtn>
            </div>
            <div>
                {selectedHour
                    && <StyledBtn
                        disabled={!isSelectedHourHasActivity}
                        onClick={hourActivity_deleteAllHour}
                    >
                        Delete
                    </StyledBtn>
                }


            </div>
        </StyledFooter>
    )
}

export default Footer


const StyledFooter = styled.footer`   
margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 230px;
        padding-inline:10px;
        background-color: ${props => props.theme.bg_color_additional};
        /* background-color: #f00; */
        /* border: 3px solid transparent; */
        /* border-top-width: 3px; */
        border-style: solid;
        border-width: 3px 0 0 0;
        border-color: ${props => props.theme.border_color_additional};
        /* border-color: #f00; */
        box-sizing: border-box;
       
    @media all and (max-width: 600px) {
        align-items: self-start;
        padding-top: 10px;
         height: 220px;
    }

    @media all and (max-width: 400px) {
        align-items: self-start;
         height: 180px;
    }

    @media all and (max-width: 320px) {
        align-items: self-start;
         height: 160px;
    } 
    
    `
