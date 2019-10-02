import Head from '../components/head'
import { useAmp } from 'next/amp'

export const config = { amp: true }

export default () => {
  const isAmp = useAmp()

  return (
    <>
      <Head title={'Frontend challenge Homepage'}></Head>
      <div>Test</div>
      <div className="test">Test with sass</div>
      <div>is amp active? {isAmp ? 'true' : 'false'}</div>
    </>
  )
}
