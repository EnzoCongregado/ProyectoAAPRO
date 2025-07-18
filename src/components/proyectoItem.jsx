export const ProyectoItem = ({ proyecto, onDelete, onComplete }) => {
  const styleCompleted = {
    textDecoration: proyecto.completed ? "line-through" : "none"
  };

  return (
    <li style={styleCompleted}>
      {proyecto.text}
      <button onClick={() => onDelete(proyecto.id)}>Eliminar</button>
      <button onClick={() => onComplete(proyecto.id)}>Completar</button>
    </li>
  );
};
