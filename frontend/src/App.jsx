import KPICard from './components/KPICard';
import './App.css';

function App() {
  return (
    <div className="kpi-cards">
      <KPICard titulo="Ventas totales" valor="$2.3M" />
      <KPICard titulo="Ganancia" valor="$286K" />
      <KPICard titulo="Pedidos" valor="9,994" />
      <KPICard titulo="Clientes" valor="793" />



    </div>
  );
}

export default App;