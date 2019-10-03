import Head from '../components/head'
import Header from '../components/Header'
import ShareForm from '../components/ShareForm'
import Footer from '../components/Footer'

// export const config = { amp: true }

export default () => {
  return (
    <>
      <Head title={'Frontend challenge Homepage'}></Head>
      <Header />
      <ShareForm />
      <Footer />
    </>
  )
}
