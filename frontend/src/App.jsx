import KPICard from './components/KPICard';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


function App() {
  return (
    
    <div className="layout">
    <Sidebar />
    <Header titulo="Dashboard de Ventas" subtitulo="Resumen general del negocio" />
    <div className="kpi-cards">
      <KPICard titulo="Ventas totales" valor="$2.3M" />
      <KPICard titulo="Ganancia" valor="$286K" />
      <KPICard titulo="Pedidos" valor="9,994" />
      <KPICard titulo="Clientes" valor="793" />


    </div>
    </div>
  );
}

export default App;