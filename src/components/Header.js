import React from 'react';

export function Header(props) {
    const message = props.message;
    return (
        <header className='container-fluid bg-orange text-white px-5 py-4 mt-1'>
            <div className='container'>
                <h1>{message}</h1>
            </div>
        </header>
    );
}