import Head from 'next/head'
import React from 'react'
import HomePage from '../pages/Homepage'
import styles from './homeContainer.module.css'
import { Props } from '../@types/props'

export default function HomeContainer({ description }: Props) {
  return (
    <>
      <Head>
        <title>login</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <HomePage />
      </main>
    </>
  )
}
