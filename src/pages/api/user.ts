import { NextApiRequest, NextApiResponse } from 'next'
import { DataApiUser, GithubApi } from '@/@types'
import { githubRepositories } from '@/constants/github-response-repos-data'

interface Data {
  data: DataApiUser | unknown
}

export default async function user(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const promise = await fetch(
      'https://api.github.com/users/Jefferson-Guirra',
      {
        headers: {
          Authorization: process.env.GITHUB_PERSONAL_TOKEN as string,
        },
      }
    )
    console.log(promise)
    const { avatar_url, bios, name, url, public_repos } =
      (await promise.json()) as GithubApi
    const data: DataApiUser = {
      name,
      bios,
      avatarUrl: avatar_url,
      publicRepos: public_repos,
      url,
      repos: githubRepositories,
    }

    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ data: err })
  }
}
