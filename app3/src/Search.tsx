import React, {useState} from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        console.log("e.target.value", e.target.value);
    }

    return (
        <div style={{ display: 'flex' }}>

            asdasdasda
            search: <input onChange={handleChange} />
        </div>
    );
}

export default Search;
