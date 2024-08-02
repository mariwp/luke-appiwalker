import React from 'react';

function ResultDisplay({ data }) {
    if (!data) return null;

    const entries = Object.entries(data).slice(0, 4);

    return (
        <div>
            {entries.map(([key, value]) => (
                <p key={key}>
                    <strong>{key.replace('_', ' ').toUpperCase()}: </strong>
                    {value}
                </p>
            ))}
        </div>
    );
}

export default ResultDisplay;
