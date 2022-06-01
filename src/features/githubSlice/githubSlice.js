import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    starred_list: []
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        getStarredRepos: (state, action) => {
            return {
                ...state,
                starred_list: action.payload
            }
        }
    }
})

export const { getStarredRepos } = githubSlice.actions
export default githubSlice.reducer;


