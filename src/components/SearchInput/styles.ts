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
    background-color:#fff;
    width: 8%;
    height: 100%;
    border-radius: 0px 10px 10px 0px;
    border: solid transparent;
  }
`;

export const List = styled.ul<{ multipleSuggestions: boolean }>`
  background-color: #fff;
  list-style: none;
  border-radius: 10px;
  padding: 5px;
  font-family: 'Montserrat-Regular',sans-serif;
  font-size: 15px;
  position: absolute; 
  top: 70px;
  left: 372px;
  width: 50%; 
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.10);
  height: ${(props) => (props.multipleSuggestions ? '270px' : 'auto')};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px; 
    border-radius: 10px; 
  }
  
  &::-webkit-scrollbar-track {
    background: #EBEBEB; 
    border-radius: 10px; 
  }

  &::-webkit-scrollbar-thumb {
    background: #fb8500; 
    border-radius: 5px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #de7702; 
  }
  
  li {
    line-height: 25px;
    border-radius: 5px;
    margin: 3px;
    padding: 3px;

    &:hover{
      background-color: #E6E6E6;
    }
  }

`;