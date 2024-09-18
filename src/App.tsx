import React from 'react';
import {SearchBar} from "./components/SearchBar";
import {ResultsList} from "./components/ResultsList";

function App() {
    return (
        <div>
            <h1>Wikipedia Searcher</h1>
            <SearchBar/>
            <ResultsList/>
        </div>
    );
}

export default App;
