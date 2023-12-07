import { useState } from "react";
import Link from "next/link";
import { useCartContext } from "@/contexts/useCartContext";
import { Cart } from "../Cart";

import { MdMenu, MdClose } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import * as H from './styles';

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount } = useCartContext();

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <>
      <H.Header>
        <H.Logo>
          <Link href="/">
            <h3>Fake <span>Store</span></h3>
          </Link>
        </H.Logo>

        <H.CartBtn onClick={toggleCart}>
          <BsCartFill style={{ color: 'black', fontSize: '20px' }} />
          <H.Number>
            <span>{itemCount}</span>
          </H.Number>
        </H.CartBtn>
      </H.Header>

        {cartOpen && (
            <Cart onClose={closeCart} />
        )}
    </>
  );
}


