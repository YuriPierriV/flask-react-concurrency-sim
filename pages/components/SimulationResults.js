// pages/components/SimulationResults.js
import React from "react";

function SimulationResults({ results }) {
return (
    <div className="mb-3">
    <h2>Resultados</h2>
    {results ? (
        <div className="alert alert-info" role="alert">
        {JSON.stringify(results)}
        </div>
    ) : (
        <p>Nenhum resultado disponível.</p>
    )}
    </div>
);
}

export default SimulationResults;
