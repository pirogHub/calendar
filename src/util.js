import dayjs from "dayjs"
const FORMAT_DAY = "YYYY-MM-DD"
const FORMAT_MONTH = "YYYY-MM"

export const createIdsService = {
    createHourIdByDayId: (dayId, hourIdx) => {
        return `${dayId} ${String(hourIdx).padStart(2, "0")}`
    },
    createHourIdFromDayjs: (dayJsObj) => {
        return dayJsObj.format(`${FORMAT_DAY} HH`)
    },
    createDayId: (day) => {
        return dayjs(day).format(`${FORMAT_DAY}`)
    },
    createDayIdFromDayjs: (dayJsObj) => {
        return dayJsObj.format(`${FORMAT_DAY}`)
    },
    createWeekIdByFullData: (year, month, idx) => {
        return dayjs(new Date(year, month)).format(`${FORMAT_MONTH}`) + ` W-${idx}`
    },
    createWeekIdByMonthId: (monthId, idx) => {
        return monthId + ` W-${idx}`
    }
}


export function getMonth(month = dayjs().month()) {
    month = Math.floor(month)
    const year = dayjs().year()
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day()
    let countDaysOfMonth = dayjs(new Date(year, month + 1, 0)).date()

    const countWeeksDays = Math.ceil(countDaysOfMonth / 7) // = 5
    let currentDayIdx = 0

    const daysMatrix = new Array(countWeeksDays).fill([]).map((_, idx) => {
        const daysInWeek = countDaysOfMonth / 7 >= 1 ? 7 : countDaysOfMonth % 7
        countDaysOfMonth -= 7
        const newWeek = new Array(daysInWeek).fill(null).map(() => {
            currentDayIdx++
            const newDay = dayjs(new Date(year, month, currentDayIdx))

            newDay.id = createIdsService.createDayIdFromDayjs(newDay)

            return newDay
        })
        newWeek.id = createIdsService.createWeekIdByFullData(year, month, idx)
        return newWeek
    })

    return daysMatrix
}


export const getTodayWeekIdx = () => {
    const mIdx = dayjs().month()
    let dayIdx = dayjs().date() - 1
    let todatWeekIdx = 0
    while (mIdx && dayIdx) {
        dayIdx = Math.floor(dayIdx / 7)
        if (dayIdx > 0) todatWeekIdx++
    }
    return todatWeekIdx
}


export const checkIsEqualDays = (day1, day2) => {
    return day1 && day2 && dayjs(day1).format(`${FORMAT_DAY}`) === dayjs(day2).format(`${FORMAT_DAY}`)
}


