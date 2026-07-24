function KPICard(props) {
  return (
    <div className="kpi-card">
      <h3>{props.titulo}</h3>
      <p className="valor">{props.valor}</p>
    </div>
  );
}

export default KPICard;