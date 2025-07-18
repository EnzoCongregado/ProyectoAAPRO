import React, { useState, useEffect } from 'react';
import VelasMoldeData from './data/velasMoldeData';
import VelasEnvaseData from './data/velasEnvaseData';
import DifusoresData from './data/difusoresData';
import { VelasList } from './components/velasList';
import { AddProyecto } from './components/proyectosAdd';
import { ProyectoList } from './components/proyectoList';
import './App.css';

function App() {
  const [filtro, setFiltro] = useState("Todos");
  const [mostrarOpciones, setMostrarOpciones] = useState(false);
const [proyectos, setProyectos] = useState(() => {
  const guardados = localStorage.getItem("proyectosValkyrias");
  return guardados ? JSON.parse(guardados) : [];
});

  useEffect(() => {
  localStorage.setItem("proyectosValkyrias", JSON.stringify(proyectos));
}, [proyectos]);
  
  const alternarOpciones = () => {
    setMostrarOpciones(!mostrarOpciones);
  };

  const seleccionarFiltro = (opcion) => {
    setFiltro(opcion);
    setMostrarOpciones(false);
  };

  const obtenerProductos = () => {
    switch (filtro) {
      case "Molde":
        return VelasMoldeData;
      case "Envase":
        return VelasEnvaseData;
      case "Difusores":
        return DifusoresData;
      default:
        return [...VelasMoldeData, ...VelasEnvaseData, ...DifusoresData];
    }
  };

  const addProyecto = (text) => {
    const nuevoProyecto = {
      id: Date.now(),
      text,
      completed: false
    };
    setProyectos([...proyectos, nuevoProyecto]);
  };

  const deleteProyecto = (id) => {
    setProyectos(proyectos.filter((p) => p.id !== id));
  };

  const toggleModificar = (id) => {
    setProyectos(
      proyectos.map((p) =>
        p.id === id ? { ...p, completed: !p.completed } : p
      )
    );
  };

  const productosFiltrados = obtenerProductos();

  return (
    <>
      <header className="header">
        <h1 className="titulo">Bienvenidos a Valkyrias</h1>
      </header>

      <nav className="navbar">
        <div className="dropdown">
          <button onClick={alternarOpciones} className="dropdown-btn">
            Presione para buscar 
          </button>
          {mostrarOpciones && (
            <div className="dropdown-menu">
              <button onClick={() => seleccionarFiltro("Todos")}>Todos</button>
              <button onClick={() => seleccionarFiltro("Difusores")}>Difusores</button>
              <button onClick={() => seleccionarFiltro("Molde")}>Velas Molde</button>
              <button onClick={() => seleccionarFiltro("Envase")}>Velas Envase</button>
            </div>
          )}
        </div>

        <a href="#contacto" className="nav-link">Contacto</a>
        <a href= "#proyectos" className="nav-link">Proyectos</a>
      </nav>

      <VelasList titulo={`Productos: ${filtro}`} velas={productosFiltrados} />

      <section id="proyectos" className="section">
        <h2>Sugerencias y futuros proyectos</h2>
        <AddProyecto onAdd={addProyecto} />
        <ProyectoList
          proyectos={proyectos}
          onDelete={deleteProyecto}
          onComplete={toggleModificar}
        />
      </section>

      <footer id="contacto" className="footer">
        <h3>Contacto</h3>
        <p>Email: valkirias@enproceso.com</p>
        <p>Instagram: @valkirias_home</p>
      </footer>
    </>
  );
}

export default App;
