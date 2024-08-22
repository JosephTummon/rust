import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const Home: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    
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

    // Handle file selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFile = event.target.files[0];
            setFile(selectedFile);

            // Create a preview URL for the selected image
            const previewUrl = URL.createObjectURL(selectedFile);
            setPreview(previewUrl);
        }
    };

    // Handle file upload
    const handleFileUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            await api.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file', error);
        }
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>{message}</p>
            <nav>
                <Link to="/foo">Go to Foo Page</Link>
            </nav>
            
            {/* File input and upload functionality */}
            <div>
                <input type="file" onChange={handleFileChange} />
                {preview && <img src={preview} alt="Preview" style={{ width: '200px', marginTop: '10px' }} />}
                <button onClick={handleFileUpload}>Upload Image</button>
            </div>
        </div>
    );
};

export default Home;
