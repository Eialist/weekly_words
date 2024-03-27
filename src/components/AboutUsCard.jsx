import me from "../assets/icon-learnica.png";

export const AboutUsCard = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center about-us-row">
        <div className="card about-us-card mb-3">
          <div
            className="card-body d-flex flex-column align-items-center"
            style={{ width: "18rem" }}>
            <img src={me} alt="" width="200px" />
            <h4>Om mig</h4>
            <p>
              En massa cool fakta om mig kanske? Vem vet. Om varför jag gör det
              här. Och så vidare.{" "}
            </p>
          </div>
        </div>
        <div className="card about-us-card mb-3">
          <div
            className="card-body d-flex flex-column align-items-center"
            style={{ width: "18rem" }}>
            <img src={me} alt="" width="200px" />
            <h4>Om mig</h4>
            <p>
              En massa cool fakta om mig kanske? Vem vet. Om varför jag gör det
              här. Och så vidare.{" "}
            </p>
          </div>
        </div>
        <div className="card about-us-card mb-3">
          <div
            className="card-body d-flex flex-column align-items-center"
            style={{ width: "18rem" }}>
            <img src={me} alt="" width="200px" />
            <h4>Om mig</h4>
            <p>
              En massa cool fakta om mig kanske? Vem vet. Om varför jag gör det
              här. Och så vidare.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
