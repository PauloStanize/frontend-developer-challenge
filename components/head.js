import Head from 'next/head'
import '../styles/style.scss'

export default ({ title = "Frontend challenge", description = "Linx Impulse frontend challenge" }) => (
  <Head>
    <>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key={"viewport"} />
      <meta name="description" content={description} key={"description"}/>
      <meta name="author" content="Paulo Stanize" key={"author"} />
      <meta name="robots" content="index,follow" key={"robots"} />
    </>
  </Head>
)
