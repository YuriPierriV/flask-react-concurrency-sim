import React, { useState } from "react";
import SimulationConfig from "pages/components/SimulationConfig";
import SimulationControl from "pages/components/SimutalionControl";
import SimulationResults from "pages/components/SimulationResults";

function Index() {
  const [config, setConfig] = useState({
    threadCount: 5,
    modelType: "sharedMemory",
    lockType: "mutex",
  });
  const [results, setResults] = useState(null);

  const handleStartSimulation = async () => {
    try {
      const response = await fetch("http://localhost:5000/start-simulation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(config),
      });

      if (!response.ok) {
        throw new Error("Resposta da rede não foi ok");
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Erro ao iniciar a simulação:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-primary text-center mt-4">
        Simulador de Concorrência
      </h1>
      <div className="row">
        <div className="col-md-6">
          <SimulationConfig config={config} setConfig={setConfig} />
        </div>
        <div className="col-md-6">
          <SimulationResults results={results} />
        </div>
      </div>
    </div>
  );
}

export default Index;
