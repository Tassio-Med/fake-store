import styled  from 'styled-components';

export const SearchInputContainer = styled.div`
  width: 50%;
  height: 30px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input:focus {
    border: 2px solid #fb8500;
  }

  
  input {
    width: 90%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;;
    border: none;
    text-align: center;

    &:focus {
    outline: none;
    box-shadow: none;
    }
  }

  button {
    background-color:#fb8500;
    padding: 5px;
    width: 10%;
    height: 100%;
    border-radius: 0px 10px 10px 0px;
    border: none;

    transition: background-color 0.4s ease;

    &:hover{
      background-color: #de7702;
    }

  }
`;
