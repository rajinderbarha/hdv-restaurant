import "@/styles/globals.css";
import "@/styles/menuGlobal.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "@/components/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTopButton from "@/common/ScrollToTopButton";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {

    if (typeof document !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.min.js')
    }

  }, [])
  return <Layout>

    <Component {...pageProps} />
    <ScrollToTopButton />
  </Layout>

}
