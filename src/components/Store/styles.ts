import styled from "styled-components";

export const Store = styled.div`
  width: 80%;
  margin-top: 150px;
`;

export const ProductsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ProductItem = styled.li`
  border: transparent;
  border-radius: 10px;
  box-shadow: -2px 1px 16px 0px rgba(0,0,0,0.45);
  padding: 10px;
`;

export const Image = styled.div`
  border-color: black;
  height: 20%;
  width: 90%;
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
  margin-left: 5px;
  white-space: nowrap;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Alert = styled.p`
  font-family: 'Montserrat', sans-serif;
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

  &hover{
    background-color: #0F58BA;
  }

  span{
    margin-left: 20px;
    font-weight: 600;
    font-size: 14px;
  }
`;