import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class SearchStore {
    query = '';
    results: any[] = [];
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setQuery(query: string) {
        this.query = query;
    }

    async search() {
        this.loading = true;
        try {
            const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: 'query',
                    list: 'search',
                    srsearch: this.query,
                    format: 'json',
                    origin: '*',
                },
            });
            this.results = response.data.query.search;
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            this.loading = false;
        }
    }
}

const searchStore = new SearchStore();
export default searchStore;
