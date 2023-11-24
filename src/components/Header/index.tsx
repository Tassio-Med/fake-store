import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";
import { BsCartFill } from "react-icons/bs"
import * as H from './styles';

export default function Header() {
  return (
    <H.Header>
      <H.Logo>
        <h3>Fake <span>Store</span></h3>
      </H.Logo>
      <H.CartBtn>
        <BsCartFill style={{ color: 'black', fontSize: '20px' }} />
        <H.Number>
          <span>16</span>
        </H.Number>
      </H.CartBtn>
    </H.Header>
  )
}