import * as H from './styles';
import { BsCartFill } from "react-icons/bs"

export default function Header() {
  return (
    <H.Header>
      <H.Logo>
        <h3>Fake <span>Store</span></h3>
      </H.Logo>
      <H.CartBtn>
        <BsCartFill style={{ color: 'black', fontSize: '18px' }} />
        <span>0</span>
      </H.CartBtn>
    </H.Header>
  )
}