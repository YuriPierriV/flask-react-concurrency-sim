import React from "react";
import { Button } from "react-bootstrap";

function SimulationControl({ onStart }) {
return (
    <div className="mb-4 p-3">
    <Button variant="success" onClick={onStart} className="btn-block">
        Iniciar Simulação
    </Button>
    </div>
);
}

export default SimulationControl;
