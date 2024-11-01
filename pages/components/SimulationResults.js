import React from "react";

function SimulationResults({ results }) {
return (
    <div className="mb-4 p-3 border rounded shadow-sm">
    <h2 className="text-primary">Resultados da Simulação</h2>
    {results ? (
        <pre>{JSON.stringify(results, null, 2)}</pre>
    ) : (
        <p>Inicie uma simulação para ver os resultados.</p>
    )}
    </div>
);
}

export default SimulationResults;
