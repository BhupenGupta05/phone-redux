import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {message: "", displayTime: 0},
    reducers: {
        setNotification(state, action) {
            const { message, displayTime } = action.payload
            return {message, displayTime}
        },
        clearNotification(state, action) {
            setTimeout(() => {
                return { message: "", displayTime: 0 }
            }, 5000)
        }
    }
})

export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer