import Header from '../components/Header'
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="blue" />
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp
