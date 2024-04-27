import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="container mx-auto px-4 max-w-1280">
            {children}
        </div>
    );
};

export default Container;