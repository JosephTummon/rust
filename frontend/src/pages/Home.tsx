import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const Home: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/');
                setMessage(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>{message}</p>
            <nav>
                <Link to="/foo">Go to Foo Page</Link>
            </nav>
        </div>
    );
};

export default Home;
