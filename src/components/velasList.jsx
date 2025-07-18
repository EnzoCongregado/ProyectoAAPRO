import './VelasList.css';
import { VelasCard } from './velasCard';

export const VelasList = ({ titulo, velas }) => {
  return (
    <div className='velas-Container'>
      <h2>{titulo}</h2>
      {velas.map((vela, indice) => (
        <VelasCard
          key={indice + vela.title}
          title={vela.title}
          description={vela.description}
          precio={vela.precio}
          image={vela.image}
          favoritos={vela.favoritos}
        />
      ))}
    </div>
  );
};