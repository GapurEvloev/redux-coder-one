import { ActionTypes } from "./constanst";

export const setUser = (user) => ({
    type: ActionTypes.SET_USER,
    payload: user
})