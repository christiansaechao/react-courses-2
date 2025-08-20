/**
 * State Values
 * ==============
 * Username
 * Email
 * Favorite Hobby
 */

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Levi",
        email: "leviadcins@web.com",
        hobby: "Basketball"
    },
    reducers: {
        updateUser: (state, action) => {
            return {...state, ...action.payload}
        },
        updateUsername: (state, action) => {
            state.name = action.payload;
        },
        updateEmail:(state) => {
            state.email = "benhollow@yahoo.com"
        },
        updateFavoriteHobby: () => {
            console.log("nothing");
        }
    }
    
});

export const { updateUsername, updateUser } = userSlice.actions;

export default userSlice.reducer;