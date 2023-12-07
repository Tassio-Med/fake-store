import styled  from 'styled-components';


export const Header = styled.header`
  width: 100%;
  height: 101px;
  overflow: hidden;
  position: fixed;
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
  padding: 20px;
  background-color: #FFFF;
  /* border-radius: 50%; */
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 30px;
  border-style: inherit;
  transition: background-color 0.4s ease;
  position: relative;

  &:hover {
    background-color: #E6E6E6;
  }

`;

export const Number = styled.div`
  position: absolute;
  background-color: #fb8500;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  bottom: -10%;
  left: 30%;
  transform: translateX(-100%);
  box-shadow: 0px 0px 0px 3px rgba(15,82,186,1);

  span {
    color: #fff;
    font-size: 17px;
    font-weight: 700;
  }

`;
