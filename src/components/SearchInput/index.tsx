// SearchInput.tsx

import { useState } from 'react';
import { apiProducts } from '@/pages/services/api/api';
import { Product } from '@/types/product.interface';
import * as S from './styles';
import { IoSearch } from "react-icons/io5";

interface SearchInputProps {
  onSearchResults: (products: Product[]) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const products = await apiProducts(); 
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      onSearchResults(filteredProducts);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  return (
    <S.SearchInputContainer>
      <input
        type="text"
        placeholder="Pesquisar produtos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>
        <IoSearch style={{ color: '#fff', fontSize: '20px' }}/>
      </button>
    </S.SearchInputContainer>
  );
};

export default SearchInput;
