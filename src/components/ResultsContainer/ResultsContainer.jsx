import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameJSx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestedNameJSx}</div>;
};

export default ResultsContainer;
