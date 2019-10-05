import Axios from 'axios'
import Head from '../components/head'
import Header from '../components/Header'
import Catalogue from '../components/Catalogue'
import ShareForm from '../components/ShareForm'
import Footer from '../components/Footer'
import envConfig from '../envConfig'

// export const config = { amp: true }

const IndexPage = ({ products }) => {
  return (
    <>
      <Head title={'Frontend challenge Homepage'}></Head>
      <Header />
      <Catalogue products={products} />
      <ShareForm />
      <Footer />
    </>
  )
}

IndexPage.getInitialProps = async ({ query: { page = 1 } }) => {
  const response = await Axios.get(`${envConfig['apiUrl']}/products?page=${page}`)
  const { products } = response.data

  return { products }
}

export default IndexPage