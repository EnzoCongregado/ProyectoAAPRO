import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './VelasCard.css';

export const VelasCard = ({ title, description, precio, image, favoritos }) => {
  const ImageUrl = image || "https://placehold.co/400";

  const getFavoritoInicial = () => {
    const guardados = JSON.parse(localStorage.getItem("favoritos")) || {};
    return guardados[title] || favoritos || false;
  };

  const [isFavorito, setIsFavorito] = useState(getFavoritoInicial);

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("favoritos")) || {};
    guardados[title] = isFavorito;
    localStorage.setItem("favoritos", JSON.stringify(guardados));
  }, [isFavorito, title]);

  const toggleFavorito = () => {
    setIsFavorito(!isFavorito);
  };

  return (
    <div className="Velas_card">
      <img src={ImageUrl} alt={title} />
      <div className="card-content">
        <div className="flex-row">
          <h2>{title}</h2>
          <span onClick={toggleFavorito} style={{ cursor: "pointer" }}>
            {isFavorito ? (
              <AiFillHeart color="red" size={24} />
            ) : (
              <AiOutlineHeart color="gray" size={24} />
            )}
          </span>
        </div>
        <p>{description}</p>
        <p>Precio: {precio}</p>
      </div>
    </div>
  );
};