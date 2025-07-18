import { ProyectoItem } from "./proyectoItem"; 

export const ProyectoList = ({ proyectos, onDelete, onComplete }) => {
  return (
    <div>
      <ul>
        {proyectos.map((proyecto) => (
          <ProyectoItem
            key={proyecto.id}
            proyecto={proyecto}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </ul>
    </div>
  );
};