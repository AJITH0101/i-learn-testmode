import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import topicReducer from './selectSlice'
import newSlice from './testSlice'

export default configureStore({
  reducer: {
    authentic:authReducer,
    topic:topicReducer,
    test:newSlice
  },
})