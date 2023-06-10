import dayjs from "dayjs"

export function getMonth(month = dayjs().month()) {
    month = Math.floor(month)
    const year = dayjs().year()
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day()
    let countDaysOfMonth = dayjs(new Date(year, month + 1, 0)).date()

    // let currentDayCount = 0 - firstDayOfMonth
    let currentDayCount = 0

    const daysMatrix = new Array(5).fill([]).map((_, idx) => {
        const daysInWeek = countDaysOfMonth / 7 > 1 ? 7 : countDaysOfMonth % 7
        countDaysOfMonth -= 7
        const newWeek = new Array(7).fill(null).map(() => {
            currentDayCount++
            const newDay = dayjs(new Date(year, month, currentDayCount))
            newDay.id = newDay.format("DD-MM-YYYY")

            return newDay
        })
        newWeek.id = dayjs(new Date(year, month)).format('MM-YYYY') + `-${idx}`
        return newWeek
    })

    return daysMatrix
}

export const checkIsEqualDays = (day1, day2) => {
    return day1 && day2 && dayjs(day1).format("DD-MM-YYYY") === dayjs(day2).format("DD-MM-YYYY")
}

export const createHourId = (dayId, hourIdx) => {
    return `${dayId} ${String(hourIdx).padStart(2, "0")}`
}
export const createHourIdFromDayjs = (day) => {
    return day.format("YYYY-MM-DD HH")
}
export const createDayId = (day) => {
    return dayjs(day).format("DD-MM-YYYY")
}