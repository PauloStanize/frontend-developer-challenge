// import Head from '../components/head'
// import Header from '../components/Header'
// import Catalogue from '../components/Catalogue'
// import ShareForm from '../components/ShareForm'
// import Footer from '../components/Footer'

// // export const config = { amp: true }

// export default () => {
//   return (
//     <>
//       <Head title={'Frontend challenge Homepage'}></Head>
//       <Header />
//       <Catalogue />
//       <ShareForm />
//       <Footer />
//     </>
//   )
// }

import Axios from 'axios'
import Head from '../components/head'
import Header from '../components/Header'
import Catalogue from '../components/Catalogue'
import ShareForm from '../components/ShareForm'
import Footer from '../components/Footer'

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

IndexPage.getInitialProps = async ({ query: { page } }) => {
  const response = await Axios.get(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
  const { products } = response.data

  return { products }
}

export default IndexPage