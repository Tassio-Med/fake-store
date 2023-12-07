import styled from "styled-components";

export const Cart = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 95px;
  right: 30px;
  position: fixed;
  width: 40%; 
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.10);
  background-color: #fff;
  border-radius: 10px;
  z-index: 999;
`;

export const CloseBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const Container = styled.div<{ multipleProducts: boolean }>`
  background-color: #fff;
  width: 100%;
  height: ${(props) => (props.multipleProducts ? '270px' : 'auto')};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem */
    border-radius: 10px; /* Raio da borda da barra de rolagem */
  }
  
  &::-webkit-scrollbar-track {
    background: #EBEBEB; /* Cor da área de fundo da barra de rolagem */
    border-radius: 10px; /* Raio da borda da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background: #fb8500; /* Cor do "ponteiro" da barra de rolagem */
    border-radius: 5px; /* Raio da borda do "ponteiro" */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #de7702; /* Cor ao passar o mouse sobre a barra de rolagem */
  }
`;

export const Lista = styled.ul`
  overflow: hidden;
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 30px 10px;
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.10);
  border-radius: 10px;
  
  &:hover{
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.20);
  }
  `;

export const DeleteBtn = styled.button`
  border-color: transparent;
  width: 10%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fa1b1b;
  
  &:hover{
    background-color: #d60202;
  }

`;

export const Box = styled.li`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const Photo = styled.div`
  height: 100%;
  width: 30%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: Montserrat-Thin, sans-serif;

  h4{
    margin-bottom: 15px;
  }
`;

export const BtnAndPrice = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  p {
    width: 50%;
    font-weight: 600;

  }
`;

export const QuantityButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 5px;
    border-color: transparent;
    color: #fff;
    background-color: #fb8500;
    font-weight: 700;
    border-width: 1px;
    margin: 0;
    
    &:hover{
      background-color: #de7702;
    }
  }
  
  input {
    border-color: #fb8500;
    border-width: 1px;
    border-style: solid;
    text-align: center;
    padding: 5px;
    width: 50%;
  }
`;

export const AddButton = styled.button`
  border-radius: 0px 5px 5px 0px;
`;

export const SubtractButton = styled.button`
  border-radius: 5px 0px 0px 5px;
`;



export const PriceAndBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  width: 100%;
  border: solid;
  margin-top: 15px;
  border-color: #d9d7d7;
  border-width: 1px 0px 0px 0px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  font-family: Montserrat-Regurlar, sans-serif;
  font-weight: 700;

  h4{
    color: #949292;
  }
`;

export const BuyBtn = styled.div`
  width: 100%;
  border-color: transparent;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Montserrat-Regular, sans-serif;
  font-weight: 700;
  padding: 8px;
  background-color: #1366e8;
  
  &:hover{
    background-color: #0F52BA;
  }
`;
