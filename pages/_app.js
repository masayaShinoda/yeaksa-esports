import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NextNprogress
        color="#BC0000"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
    </>
  )
}

export default MyApp
