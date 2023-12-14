import styled from "styled-components";

export const MotionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #fff; */
  width: 98%; 
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;

export const BoxSlide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ProductsSlide = styled.div`
  display: flex;
  gap: 20px; 
  width: 100%;
  padding: 5px 2px;
  overflow-x: hidden; 
  white-space: nowrap;  
  
  div{
    display: flex;
    width: 100%; 
  }
`;

export const ArrowButton = styled.button`
  border-radius: 50%;
  z-index: 20;
  border-style: solid;
  border-color: transparent;
  width: 65px;
  height: 65px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.10);
  background-color: #fff;
  
  &:hover{
    /* background-color: #fff; */
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.20);
  }
`;
