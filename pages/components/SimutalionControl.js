// pages/components/SimulationControl.js
import React from "react";
import { Button } from "react-bootstrap"; // Importa o componente Button do Bootstrap

function SimulationControl({ onStart }) {
  return (
    <div className="mb-3">
      <Button variant="primary" onClick={onStart} style={{ width: '100%' }}>
        Start Simulation
      </Button>
    </div>
  );
}

export default SimulationControl;
