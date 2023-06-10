export function savedEventsReducer(state, { type, payload }) {
    switch (type) {
        case "push":
            return [...state, payload]
        case "update":
            return state.map(e => e.id === payload?.id ? payload : e)
        case "delete":
            return state.filter(e => e.id !== payload?.id)
        case "deleteAllHour":
            return state.filter(e => e.hourId !== payload?.hourId)
        default:
            throw new Error()

    }
}

export function initEvents() {
    const storageEvents = localStorage.getItem('savedEvents')
    let parsedEvents = []

    if (storageEvents) {
        try {
            parsedEvents = JSON.parse(storageEvents)
        } catch (error) {
            localStorage.removeItem('savedEvents')
            parsedEvents = []
        }
    }
    return parsedEvents
}
