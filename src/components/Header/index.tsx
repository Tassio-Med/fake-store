import { useState } from "react";
import Link from "next/link";
import { useCartContext } from "@/contexts/useCartContext";
import { Cart } from "../Cart";
import SearchInput from "../SearchInput";
import Store from "../Store";

import { MdMenu, MdClose } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import * as H from './styles';
import { Product } from "@/types/product.interface";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount } = useCartContext();
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const handleSearchResults = (results: Product[]) => {
    setSearchResults(results);
  };

  return (
    <>
      <H.Header>
        <H.Logo>
          <Link href="/">
            <h3>Fake <span>Store</span></h3>
          </Link>
        </H.Logo>
        <SearchInput onSearchResults={handleSearchResults} />

        <H.CartBtn onClick={toggleCart}>
          <BsCartFill style={{ color: 'black', fontSize: '20px' }} />
          <H.Number>
            <span>{itemCount}</span>
          </H.Number>
        </H.CartBtn>
      </H.Header>

      {searchResults.length > 0 && (
        <H.Results>
          <Store products={searchResults} />
        </H.Results>
      )}

        {cartOpen && (
            <Cart onClose={closeCart} />
        )}
    </>
  );
}


