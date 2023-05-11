import { useEffect, useState, useCallback } from 'react'
import { Loading } from '@/components/helpers/loading/Loading'
import { DataApiUser } from '@/@types'
import styles from './user.module.css'
import GitHubCalendar from 'react-github-calendar'
import { BsLink45Deg } from 'react-icons/bs'
import { VscGithubAlt } from 'react-icons/vsc'
import Image from 'next/image'
import Link from 'next/link'

interface User {
  data: DataApiUser
}
const User = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({} as User)

  const getData = async () => {
    const promise = await fetch('/api/user')
    const response = await promise.json()
    if (response.data.message) {
      throw new Error(response.message)
    }
    return response
  }
  const handleFetch = useCallback(async () => {
    setLoading(true)
    try {
      const data = (await getData()) as User
      setUser(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])
  useEffect(() => {
    handleFetch()
  }, [handleFetch])
  if (loading || Object.keys(user).length === 0)
    return <main className={styles.container}>{loading && <Loading />}</main>
  else
    return (
      <main className={styles.container}>
        <header className={styles.header}>
          <div
            style={{
              borderRadius: '3px',
              overflow: 'hidden',
              width: '60px',
              height: '60px',
              border: '2px solid #2d2d2d',
            }}
          >
            <Image
              src={user.data.avatarUrl}
              width={60}
              height={60}
              alt="user img"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAVklEQVR42u3PAQEAAAQAIJYb6IoRHjigHpQzXfFICgsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLC18WpGe8NQz82AkAAAAASUVORK5CYII="
            />
          </div>
          <p>{user.data.name}</p>
          <p>{user.data.publicRepos} repos</p>
        </header>

        <div className={styles.repos}>
          {user.data.repos.map((repo) => (
            <div key={repo.name} className={styles.repo}>
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>
              <div className={styles.links}>
                <Link href={repo.GithubUrl} target="_blank">
                  <VscGithubAlt size={27} color="#f97b6f" />
                </Link>
                <Link href={repo.linkUrl} target="_blank">
                  <BsLink45Deg size={30} color="#f97b6f" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.contributions}>
          <GitHubCalendar
            username="Jefferson-Guirra"
            theme={{ light: ['#2d2d2d', 'rgb(57, 211, 83)'] }}
            hideMonthLabels
          />
        </div>
      </main>
    )
}

export default User
