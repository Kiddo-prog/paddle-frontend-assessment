import React from 'react'
import { useSelector } from 'react-redux'

export default function ListGithubRepos() {
    const list = useSelector(state => state.github.starred_list)
  return (
    <div>
        {list.length === 0 ? <p>Loading... </p> 
        : 
        list?.items.map(item => (
            <div key={item.id}>
                <div>{item.owner.id}</div>
                <p>{item.owner.login}</p>
                <img src={item.owner.avatar_url} alt="profile url" />
                <div>{item.name}</div>
                <div>{item.description}</div>
                <p>{item.stargazers_count}</p>
                <p>{item.open_issues_count}</p>
            </div>
        ))}
    </div>
  )
}

