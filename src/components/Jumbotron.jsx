import img from "../assets/child-on-phone.png";

export const Jumbotron = () => {
  return (
    <div
      className="jumbotron 
    "
      style={{ padding: 0, overflow: "hidden" }}>
      <img src={img} alt="" style={{ width: "100%" }} />
      <div style={{ margin: "2rem" }}>
        <h4 className="display-5">Weekly Word Practice</h4>
        <p className="lead">
          För att lära sig ett språk är det viktigt att kunna många ord. Därför
          byts orden här ut varje vecka. Passa på att träna på just de här orden
          nu! Det finns många ord i listan så tryck på <strong>Nya ord</strong>
          -knappen så får du fler att träna på.
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
