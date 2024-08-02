import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchForm({ setData, setError }) {
    const [resource, setResource] = useState('people');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://swapi.dev/api/${resource}/${id}/`);
            setData(response.data);
            setError(null);
            navigate(`/${id}`);
        } catch (error) {
            setError('Estos no son los droides que está buscando');
            setData(null);
        }
    };

    return (
        <div>
            <label>
                Search for:
                <select value={resource} onChange={e => setResource(e.target.value)}>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
            </label>
            <input type="number" value={id} onChange={e => setId(e.target.value)} placeholder="Id" />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchForm;
