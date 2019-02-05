import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 75f732e6a65e6b4d4d6af0c6f7472eff33055ed6586d36902ba943674ee17eeb'
            }
        }).then((response) => {
            console.log(response.data.results);
            //then promise built into axios that provides accessed API data.
            //data.results accesses specifcally the results bit of informaton from API -- only technically need response
        });
    }

    render() {
        return(
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        );
    }
};

export default App;