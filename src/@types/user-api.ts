export type GithubRepositories = {
  name: string
  GithubUrl: string
  linkUrl: string
  description: string
}[]
export interface DataApiUser {
  url: string
  name: string
  avatarUrl: string
  publicRepos: string
  bios: string
  repos: GithubRepositories
}
