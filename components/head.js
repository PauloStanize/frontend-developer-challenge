import Head from 'next/head'
import '../styles/style.scss'

export default ({ title = "Frontend challenge" }) => (
  <Head>
    <>
      <title>{title}</title>
    </>
  </Head>
)
