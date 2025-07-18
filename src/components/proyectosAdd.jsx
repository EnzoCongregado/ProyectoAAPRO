import './proyectosAdd.css';
import { useState } from "react";

export const AddProyecto = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Añade sugerencias"
        className="input"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
