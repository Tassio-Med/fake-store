import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EBEBEB;
  height: 100vh;
`;

export const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  list-style: none;
  padding: 20px;
  margin: 25px;
  background-color: #fff;
  border-radius: 5px;
`;

export const Photo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Details = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    font-family: Montserrat-Regular, sans-serif;
    line-height: 30px;
  }
`;

export const Description = styled.p`
  font-family: Montserrat-Thin, sans-serif;
`

export const Price = styled.div`
  font-family: Montserrat-Light, sans-serif;


  p {
    color: green;
    font-size: 15px;
    margin-top: 5px;
    font-weight: 700;
  }

`;

export const Payment = styled.li`
  display: flex;
  flex-direction: column;
  border: solid 1px #d6d6d6;
  border-radius: 5px;
  padding: 20px;
`;

export const InfoPayment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-family: Montserrat-Thin, sans-serif;
`;

export const VerifiedAndDelivery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Delivery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Stock = styled.div`
  display: flex;
  font-size: 13px;
  margin: 8px 0;

  p {
    margin-left: 5px;
  }
`;

export const Frete = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0px;

  p {
      color: green;
      font-family: Montserrat-Medium;
      margin-left: 10px;
    }
`;

export const Verified = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;

  p {
      color: #4340ff;
      font-family: Montserrat-Thin;
      margin-left: 5px;
      font-size: 13px;
    }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BuyBtn = styled.button`
  border-radius: 5px;
  background-color: #fb8500;
  border-style: inherit;
  margin-bottom: 10px;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  transition: background-color 0.4s ease;

  &:hover{
    background-color: #de7702;
  }
`;

export const CartBtn = styled.button`
  border-radius: 5px;
  padding: 10px;
  border-style: solid;
  border-color: #fb8500;
  color: #fb8500;
  background-color: #fff;
  font-weight: 700;
  font-size: 15px;
  transition: background-color 0.4s ease;

  &:hover{
    background-color: #de7702;
    border-color: #de7702;
    color: #fff;
  }
`;