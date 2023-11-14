import Head from "next/head"
import Header from "@/components/Header"
import Store from "@/components/Store"
import * as H from '../../styles/home'

export default function Home() {

  return (
   <H.Home>
    <Head>
      <title>MKS</title>
    </Head>

    <Header/>
    <Store/>
   </H.Home>
  )
}
