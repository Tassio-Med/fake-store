import styled  from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 101px;
  background-color: #0F52BA;
  font-family: Monts;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.header`
  color: #FFFF;
  line-height: 19px;

  h3{
    font-size: 40px;
    font-weight: 600;
  }

  span {
    font-size: 20px;
    font-weight: 200;
  }
`;

export const CartBtn = styled.button`
  width: 90px;
  height: 45px;
  background-color: #FFFF;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;

  span {
    color: black;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.94px;
  }
`;