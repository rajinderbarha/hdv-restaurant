import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {

    if (typeof document !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.min.js')
    }

  }, [])
  return <Layout>

    <Component {...pageProps} />
  </Layout>

}