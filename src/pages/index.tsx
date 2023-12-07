import Head from "next/head"
import Store from "@/components/Store"
import * as H from '../../styles/home'

export default function Home() {

  return (
   <H.Home>
    <Head>
      <title>Store</title>
    </Head>

    <Store/>
    <H.Copy>Online Store &copy; Todos os direitos reservados</H.Copy>
   </H.Home>
  )
}
