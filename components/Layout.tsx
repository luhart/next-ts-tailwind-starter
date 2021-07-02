import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'ReleaseHub - A GitHub Release Tracker',
}: Props): JSX.Element => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar />
    </header>
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-2">{children}</div>
  </div>
)

export default Layout
