import { useState, useEffect } from "react";

export const ModificarVela = ({ velaSeleccionada, onModificar, onCancelar }) => {
  const [velaEditada, setVelaEditada] = useState(velaSeleccionada);

  useEffect(() => {
    setVelaEditada(velaSeleccionada);
  }, [velaSeleccionada]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVelaEditada({
      ...velaEditada,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onModificar(velaEditada);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "2rem" }}>
      <h3>Modificar vela</h3>
      <input type="text" name="title" placeholder="Título" value={velaEditada.title} onChange={handleChange} />
      <input type="text" name="description" placeholder="Descripción" value={velaEditada.description} onChange={handleChange} />
      <input type="text" name="precio" placeholder="Precio" value={velaEditada.precio} onChange={handleChange} />
      <input type="text" name="image" placeholder="URL de imagen" value={velaEditada.image} onChange={handleChange} />
      <label>
        Favorito: <input type="checkbox" name="favoritos" checked={velaEditada.favoritos} onChange={handleChange} />
      </label>
      <div style={{ marginTop: "1rem" }}>
        <button type="submit">Guardar</button>
        <button type="button" onClick={onCancelar} style={{ marginLeft: "1rem" }}>Cancelar</button>
      </div>
    </form>
  );
};
