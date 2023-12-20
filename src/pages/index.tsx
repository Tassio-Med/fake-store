import Head from "next/head"
import Store from "@/components/Store"
import Footer from "@/components/Footer";
import * as H from '../../styles/home'
import { GetServerSideProps } from 'next';
import { apiProducts } from '@/pages/services/api/api';
import { Product } from "@/types/product.interface";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const productsData = await apiProducts();
    return {
      props: {
        products: productsData,
      },
    };
  } catch (error) {
    console.error('Erro ao fazer fetch dos produtos', error);
    return {
      props: {
        products: [],
      },
    };
  }
};

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  return (
    <H.Home>
      <Head>
        <title>Store</title>
      </Head>
      <Store products={products} />
      <Footer />
    </H.Home>
  );
}

