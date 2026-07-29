import { useState } from "react";
function Sidebar() {
  const [activeItem, setActiveItem] = useState("Resumen");

  return (
    <aside className="sidebar">
      <h2>Ventas Pyme</h2>
      <nav>
        <ul> 
        <li className={activeItem === "Resumen" ? "activo" : ""} onClick={()=> setActiveItem("Resumen")}>Resumen</li>
        <li className={activeItem === "Ventas" ? "activo" : ""} onClick={()=> setActiveItem("Ventas")}>Ventas</li>
        <li className={activeItem === "Productos" ? "activo" : ""} onClick={()=> setActiveItem("Productos")}>Productos</li>
        <li className={activeItem === "Clientes" ? "activo" : ""} onClick={()=> setActiveItem("Clientes")}>Clientes</li>
         </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;