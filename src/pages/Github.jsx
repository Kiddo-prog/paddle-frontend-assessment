import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getStarredRepos } from '../features/githubSlice/githubSlice';

import GithubPage from '../components/GithubPage/GithubPage';

const Github = () => {
    const dispatch = useDispatch()

    const fetchData = async() => {
        const item = await fetch(`${process.env.REACT_APP_GITHUB_URL_LINK}/repositories?q=created:>2022-05-01&sort=stars&order=desc`)
        const response = await item.json()
        dispatch(getStarredRepos(response))
        console.log(response)
    }
    
    useEffect(() => {
        fetchData()
    })
    return (
        <div>
            <GithubPage />
        </div>
    )
}

export default Github