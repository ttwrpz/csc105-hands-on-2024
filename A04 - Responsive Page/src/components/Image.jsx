import React from 'react';

function Image({ src }) {
    return (
        <div className="flex flex-1 items-center justify-center bg-gray-50 rounded overflow-hidden transition hover:scale-105">
            <img src={src} alt="Gallery" />
        </div>
    );
}

export default Image;