// pages/components/SimulationConfig.js
import React from "react";

function SimulationConfig({ config, setConfig }) {
  // Atualiza a configuração sempre que o usuário altera algum valor nos campos
const handleChange = (e) => {
    const { name, value } = e.target;
    // Atualiza o estado de configuração com o novo valor do campo específico
    setConfig((prev) => ({ ...prev, [name]: value }));
};

return (
    <div className="mb-3">
    <h2>Configuração</h2>

      {/* Configuração da quantidade de threads */}
    <div className="form-group">
        <label htmlFor="threadCount">Thread Count:</label>
        <input
        type="number"
        className="form-control"
        id="threadCount"
        name="threadCount"
        value={config.threadCount}
        onChange={handleChange}
        />
    </div>

      {/* Seleção do tipo de modelo (memória compartilhada ou passagem de mensagens) */}
    <div className="form-group">
        <label htmlFor="modelType">Model Type:</label>
        <select
        className="form-control"
        id="modelType"
        name="modelType"
        value={config.modelType}
        onChange={handleChange}
        >
        <option value="sharedMemory">Shared Memory</option>
        <option value="messagePassing">Message Passing</option>
        </select>
    </div>

      {/* Seleção do tipo de trava para controlar a concorrência */}
    <div className="form-group">
        <label htmlFor="lockType">Lock Type:</label>
        <select
        className="form-control"
        id="lockType"
        name="lockType"
        value={config.lockType}
        onChange={handleChange}
        >
        <option value="mutex">Mutex</option>
        <option value="semaphore">Semaphore</option>
        <option value="optimisticControl">Optimistic Control</option>
        </select>
    </div>
    </div>
);
}

export default SimulationConfig;
