import { useState } from "react";

export const AgregarVela = ({ onAgregar }) => {
  const [nuevaVela, setNuevaVela] = useState({
    title: "",
    description: "",
    precio: "",
    image: "",
    favoritos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevaVela({
      ...nuevaVela,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevaVela.title || !nuevaVela.precio) {
      alert("El título y precio son obligatorios.");
      return;
    }
    onAgregar(nuevaVela);
    setNuevaVela({
      title: "",
      description: "",
      precio: "",
      image: "",
      favoritos: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "2rem" }}>
      <h3>Agregar nueva vela</h3>
      <input type="text" name="title" placeholder="Título" value={nuevaVela.title} onChange={handleChange} />
      <input type="text" name="description" placeholder="Descripción" value={nuevaVela.description} onChange={handleChange} />
      <input type="text" name="precio" placeholder="Precio" value={nuevaVela.precio} onChange={handleChange} />
      <input type="text" name="image" placeholder="URL de imagen" value={nuevaVela.image} onChange={handleChange} />
      <label>
        Favorito: <input type="checkbox" name="favoritos" checked={nuevaVela.favoritos} onChange={handleChange} />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
};
