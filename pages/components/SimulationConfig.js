import React from "react";
import SimulationControl from "pages/components/SimutalionControl";

function SimulationConfig({ config, setConfig, onStart }) {
  // Atualiza a configuração sempre que o usuário altera algum valor nos campos
const handleChange = (e) => {
    const { name, value } = e.target;
    // Atualiza o estado de configuração com o novo valor do campo específico
    setConfig((prev) => ({ ...prev, [name]: value }));
};

return (
    <div className="config-container mb-4">
    <h2 className="text-primary">Configuração</h2>

      {/* Configuração da quantidade de threads */}
    <div className="form-group">
        <label htmlFor="threadCount">Quantidade de Threads:</label>
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
        <label htmlFor="modelType">Tipo de Modelo:</label>
        <select
        className="form-control"
        id="modelType"
        name="modelType"
        value={config.modelType}
        onChange={handleChange}
        >
        <option value="sharedMemory">Memória Compartilhada</option>
        <option value="messagePassing">Passagem de Mensagens</option>
        </select>
    </div>

      {/* Seleção do tipo de trava para controlar a concorrência */}
    <div className="form-group">
        <label htmlFor="lockType">Tipo de Trava:</label>
        <select
        className="form-control"
        id="lockType"
        name="lockType"
        value={config.lockType}
        onChange={handleChange}
        >
        <option value="mutex">Mutex</option>
        <option value="semaphore">Semáforo</option>
        <option value="optimisticControl">Controle Otimista</option>
        </select>
    </div>
        <SimulationControl onStart={onStart} />
    </div>
);
}

export default SimulationConfig;
