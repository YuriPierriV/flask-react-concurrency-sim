import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("https://flaskconcurrency.onrender.com");

const Square = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 }); // Posição percentual inicial (meio da tela)
  const [isMoving, setIsMoving] = useState(false);
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    // Recebe atualização de posição inicial e status de outros usuários
    socket.on("update_square", (data) => {
      // Converte porcentagem para pixels com base no tamanho atual da tela
      const adjustedX = (data.x / 100) * window.innerWidth - 25;
      const adjustedY = (data.y / 100) * window.innerHeight - 25;
      setPosition({ x: adjustedX, y: adjustedY });
      setCanMove(!data.in_use);
    });

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
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      // Calcula posição percentual
      const xPercentage = (clientX / window.innerWidth) * 100;
      const yPercentage = (clientY / window.innerHeight) * 100;

      // Atualiza a posição em porcentagem
      setPosition({ x: clientX - 25, y: clientY - 25 });
      socket.emit("move_square", { x: xPercentage, y: yPercentage });
    }
  };

  const endMove = () => {
    socket.emit("end_move");
    setIsMoving(false);
  };

  useEffect(() => {
    if (isMoving) {
      window.addEventListener("mousemove", moveSquare);
      window.addEventListener("touchmove", moveSquare, { passive: false });
    } else {
      window.removeEventListener("mousemove", moveSquare);
      window.removeEventListener("touchmove", moveSquare);
    }
    return () => {
      window.removeEventListener("mousemove", moveSquare);
      window.removeEventListener("touchmove", moveSquare);
    };
  }, [isMoving]);

  return (
    <div
      onMouseDown={(e) => canMove && startMove(e)}
      onTouchStart={(e) => canMove && startMove(e)}
      onMouseUp={endMove}
      onTouchEnd={endMove}
      style={{
        width: 50,
        height: 50,
        backgroundColor: "blue",
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: canMove ? "pointer" : "not-allowed",
        touchAction: "none",
      }}
    />
  );
};

export default Square;
