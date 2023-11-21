import styled  from 'styled-components';


export const Header = styled.header`
  width: 100%;
  height: 101px;
  overflow: hidden;
  /* position: fixed; */
  top: 0;
  background-color: #0F52BA;
  font-family: Monts;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.header`
  color: #FFFF;
  line-height: 19px;
  margin-left: 30px;
  
  h3{
    font-size: 40px;
    font-weight: 600;
    font-family: 'Montserrat-Medium', sans-serif;
    color: #fb8500;
  }
  
  span {
    font-size: 20px;
    font-weight: 200;
    font-family: 'Montserrat-Thin', sans-serif;
    color: #fff;
  }
`;

export const CartBtn = styled.button`
  width: 90px;
  height: 45px;
  background-color: #FFFF;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 30px;
  border-style: inherit;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: #E6E6E6;
  }

  span {
    color: black;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.94px;
  }
`;