import React, {useCallback, useState} from 'react';
import { observer } from 'mobx-react-lite';
import searchStore from '../stores/SearchStore';

export const SearchBar: React.FC = observer(() => {
    const [input, setInput] = useState('');

    const handleSearch = useCallback(() => {
        searchStore.setQuery(input);
        searchStore.search();
        setInput('');
    }, [input]);

    const handleKeyPress = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }, [handleSearch]);

    return (
        <div className="search-container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search Wikipedia..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
});
