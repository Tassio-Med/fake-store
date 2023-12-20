import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { IoSearch } from "react-icons/io5";
import { apiProducts } from '@/pages/services/api/api';
import * as S from "./styles";
import { Product } from '@/types/product.interface';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [inputClicked, setInputClicked] = useState(false);
  const router = useRouter();
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await apiProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        if (searchTerm.trim() === '' || !inputClicked) {
          setSuggestions([]);
          return;
        }

        const filteredSuggestions = products
          .map((product) => product.title)
          .filter((title) => title.toLowerCase().includes(searchTerm.toLowerCase()));

        setSuggestions(filteredSuggestions);
      } catch (error) {
        console.error('Erro ao obter sugestões de pesquisa:', error);
      }
    };

    fetchSuggestions();
  }, [searchTerm, inputClicked, products]);

  const handleSuggestionClick = async (suggestion: string) => {
    setSearchTerm(suggestion);
    setInputClicked(false); // Reset inputClicked state
    const productId = getProductIdByTitle(suggestion);
    try {
      router.push(`/products/${productId}`);
    } catch (error) {
      console.error('Produto não encontrado');
    }
  };

  const getProductIdByTitle = (title: string) => {
    const product = products.find((p) => p.title === title);
    return product ? String(product.id) : '';
  };

  const handleInputClick = () => {
    setInputClicked(true);
    setSuggestions([]); 
  };

  return (
    <S.SearchInputContainer>
      <input
        type="text"
        placeholder="Pesquisar produtos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={handleInputClick}
        ref={inputRef}
      />
      {searchTerm && suggestions.length > 0 && (
        <S.List multipleSuggestions={suggestions.length > 4}>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </S.List>
      )}
      <button>
        <IoSearch style={{ color: '#fb8500', fontSize: '20px' }} />
      </button>
    </S.SearchInputContainer>
  );
};

export default SearchInput;
