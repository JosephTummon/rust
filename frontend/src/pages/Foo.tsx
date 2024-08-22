import React from 'react';
import { Link } from 'react-router-dom';

const Foo: React.FC = () => {
    return (
        <div>
            <h1>Foo Page</h1>
            <p>This is the content for the Foo page.</p>
            <nav>
                <Link to="/">Go to Home Page</Link>
            </nav>
        </div>
    );
};

export default Foo;
