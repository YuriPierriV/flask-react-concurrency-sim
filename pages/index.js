import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // URL do backend Flask

const Square = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    // Centraliza o quadrado na montagem do componente
    setPosition({
      x: window.innerWidth / 2 - 25, // 50 / 2
      y: window.innerHeight / 2 - 25, // 50 / 2
    });

    // Recebe atualização de posição de outros usuários
    socket.on("update_square", (data) => {
      setPosition({ x: data.x, y: data.y });
      setCanMove(!data.in_use);
    });

    // Limpa o WebSocket ao desmontar
    return () => {
      socket.off("update_square");
    };
  }, []);

  const startMove = () => {
    socket.emit("start_move");
    setIsMoving(true);
  };

  const moveSquare = (e) => {
    if (isMoving) {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX); // Suporte a touch
      const clientY = e.clientY || (e.touches && e.touches[0].clientY); // Suporte a touch
      const newX = clientX - 25; // Centraliza o quadrado
      const newY = clientY - 25; // Centraliza o quadrado
      setPosition({ x: newX, y: newY });
      socket.emit("move_square", { x: newX, y: newY });
    }
  };

  const endMove = () => {
    socket.emit("end_move");
    setIsMoving(false);
  };

  // Adiciona e remove ouvintes de evento para o movimento do mouse e toque
  useEffect(() => {
    if (isMoving) {
      // Adiciona o ouvinte de movimento do mouse e toque no documento
      window.addEventListener("mousemove", moveSquare);
      window.addEventListener("touchmove", moveSquare, { passive: false });
    } else {
      // Remove os ouvintes quando não estiver mais movendo
      window.removeEventListener("mousemove", moveSquare);
      window.removeEventListener("touchmove", moveSquare);
    }

    // Limpeza ao desmontar
    return () => {
      window.removeEventListener("mousemove", moveSquare);
      window.removeEventListener("touchmove", moveSquare);
    };
  }, [isMoving]); // Dependência para verificar se está se movendo

  return (
    <div
      onMouseDown={startMove}
      onTouchStart={startMove} // Evento de toque
      onMouseUp={endMove}
      onTouchEnd={endMove} // Evento de toque
      style={{
        width: 50,
        height: 50,
        backgroundColor: "blue",
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: canMove ? "pointer" : "not-allowed",
        touchAction: "none", // Impede a rolagem ao tocar no quadrado
      }}
    />
  );
};

export default Square;
