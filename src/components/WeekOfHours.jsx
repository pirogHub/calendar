import React from 'react'

import DayOfHours from './DayOfHours'
import Hour from './Hour/Hour'
import { checkIsEqualDays, createIdsService } from '../util'
import { styled } from 'styled-components'
import MyGreedMyRules from './containers/MyGreedMyRules'

const timeArr = Array.from({ length: 24 }, (x, idx) => {
    const timeStr = `${idx}`.padStart(2, "0")
    return `${timeStr}:00`
})




export default function WeekOfHours({ week, savedEvents }) {
    return (
        <WrapperWeekOfHours
        >

            <div className="wrapper">

                <div className="content">
                    <MyGreedMyRules
                        Comp1={<div>
                            {timeArr.map(t => {
                                return <div key={t}>
                                    <Hour
                                        $NoActions
                                        title={t} />
                                </div>
                            })}

                        </div>}
                    >

                        <div style={{ width: "100%", display: 'flex' }}>
                            {week.map((day, idx) => {
                                const eventsToday = savedEvents
                                    ? savedEvents.filter(e => checkIsEqualDays(e.day, day))
                                    : []

                                const dayId = createIdsService.createDayId(day)

                                return <DayOfHours
                                    day={day}
                                    key={day.id}
                                    dayId={dayId}
                                    eventsToday={eventsToday}
                                />
                            })}

                        </div>
                    </MyGreedMyRules>
                </div>

            </div>

        </WrapperWeekOfHours >
    )
}


const WrapperWeekOfHours = styled.div`
       
        height: 100%;
        position: relative;
    
        

        .wrapper {
        top: 0;
        bottom: 0;
        position: absolute;
        width: 100%;       
        }

        .content {
        padding-top: 15px;
        background-color: white;
        max-height: 100%;
        display: flex;
        overflow-y: auto;
        }

`