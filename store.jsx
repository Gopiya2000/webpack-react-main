import { createStore } from "@reduxjs/toolkit"
import authReducer from "./src/components/redux/authReducer"

export const store = createStore(authReducer)
