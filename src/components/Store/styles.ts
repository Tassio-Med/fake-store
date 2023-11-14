import styled from "styled-components";

export const Store = styled.div`
  width: 80%;
  margin-top: 400px;
`;

export const ProductsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Card = styled.div`
  box-shadow: -1px 0px 9px -1px rgba(0,0,0,0.35);
  border: transparent;
  border-radius: 10px;
  overflow: hidden;
`;

export const ProductItem = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.div`
  background-color: blue;
  height: 50%;
  width: 90%;
  border-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 9px;

  h4 {
    font-family: 'Montserrat-Thin', sans-serif;
    font-size: 16px;
    font-weight: 300;
  }
`;

export const Price = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 26px;
  border-radius: 5px;
  background-color: #373737;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  margin-left: 10px;
  white-space: nowrap;
`;


export const Alert = styled.p`
  font-family: 'Montserrat-Thin', sans-serif;
  font-size: 10px;
  margin: 20px 0;

`;

export const BuyBtn = styled.button`
  background-color: #0F52BA;
  color: #fff;
  width: 100%;
  border: transparent;
  border-style: inherit;
  border-radius: 0px, 0px, 8px, 8px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0; 

  &:hover{
    background-color: #0F58BA;
  }

  span{
    margin-left: 20px;
    font-weight: 600;
    font-size: 14px;
  }
`;