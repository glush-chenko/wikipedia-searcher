import React from 'react';
import { observer } from 'mobx-react-lite';
import searchStore from '../stores/SearchStore';

export const ResultsList: React.FC = observer(() => {
    if (searchStore.loading) {
        return <div>Loading...</div>;
    }

    return (
        <ul className="results-list">
            {searchStore.results.map((result) => (
                <li key={result.pageid}>
                    <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" rel="noopener noreferrer">
                        {result.title}
                    </a>
                    <p dangerouslySetInnerHTML={{ __html: result.snippet }} />
                </li>
            ))}
        </ul>
    );
});
