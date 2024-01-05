import { configureStore } from '@reduxjs/toolkit'
import phoneReducer from './reducers/phoneReducer'
import filterReducer from './reducers/filterReducer.js'
import notificationReducer from './reducers/notificationReducer.js'

const store = configureStore({
    reducer: {
      persons: phoneReducer,
      filter: filterReducer,
      notification: notificationReducer
    }
})

export default store