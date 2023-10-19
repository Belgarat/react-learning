import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    comments: commentsReducer,
    users: usersReducer,
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>