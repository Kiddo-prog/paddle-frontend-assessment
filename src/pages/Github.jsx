import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getStarredRepos } from '../features/githubSlice/githubSlice';
import ListGithubRepos from '../components/Github/List';

const Github = () => {
    const [items, setItems] = useState([])
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
            <ListGithubRepos />
        </div>
    )
}

export default Github