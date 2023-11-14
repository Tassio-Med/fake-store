import Head from "next/head"
import Header from "@/components/Header"
import Store from "@/components/Store"
import Products from "@/components/Products"
import * as H from '../../styles/home'

export default function Home() {

  return (
   <H.Home>
    <Head>
      <title>MKS</title>
    </Head>

    <Header/>
    <Products/>
    <Store/>
    <h3>Aprendendo Next.js
    </h3>
   </H.Home>
  )
}
