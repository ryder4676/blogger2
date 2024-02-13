// _app.tsx
import { AppProps } from 'next/app';
import Header from "../src/components/header"; 
import '../styles/globals.css'; // Include your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
