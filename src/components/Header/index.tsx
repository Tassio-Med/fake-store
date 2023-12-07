import { useState } from "react";
import Link from "next/link";
import { useCartContext } from "@/contexts/useCartContext";
import { Cart } from "../Cart";

import { AnimatePresence, motion } from "framer-motion";
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

  const cartVariants = {
    hidden: {
      // opacity: 1,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: "57.5%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      // opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
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

      <AnimatePresence>
        {cartOpen && (
          <motion.div
            variants={cartVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="cart-modal"
          >
            <Cart onClose={closeCart}/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


