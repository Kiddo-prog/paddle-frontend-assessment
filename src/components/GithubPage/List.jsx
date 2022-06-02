import React from 'react'
import { useSelector } from 'react-redux'
import styles from './GithubPage.module.css'

const ListGithubRepos = () => {
    const list = useSelector(state => state.github.starred_list)
  return (
    <div>
        {list.length === 0 ? <LoadingBar /> 
        : 
        list?.items.map(item => (
            <div key={item.id} className={styles.GITHUB_CONTAINER}>
              <div className={styles.GITHUB_SUB_CONTAINER_ONE}>
                <img src={item.owner.avatar_url} alt="profile url" style={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%'
                }}/>
              </div>
              <div className={styles.GITHUB_SUB_CONTAINER_TWO}>
                <h2>{item.owner.login}</h2>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div className={styles.GITHUB_TRACK_INFO}>
                  <p>Stars: {item.stargazers_count}</p>
                  <p>Issues: {item.open_issues_count}</p>
                </div>
              </div>
            </div>
        ))}
    </div>
  )
}

const LoadingBar = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}>
      </div>
    </div>
  )
}

export default ListGithubRepos;