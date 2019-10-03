import Head from 'next/head'
import '../styles/style.scss'
import { colors } from './../styles'

export default ({ title = "Frontend challenge", description = "Linx Impulse frontend challenge" }) => (
  <>
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

    <style jsx global>{`
      body {
        font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
      }

      button {
        cursor: pointer;
        height: 30px;
        width: 100%;
        background: ${colors.secondary} 0% 0% no-repeat padding-box;
        border: 1px solid ${colors.primaryDark};
        border-radius: 4px;
        opacity: 1;
        color: ${colors.primary};
        font-size: 16px;
        line-height: 16px;
      }
    `}</style>
  </>
)
