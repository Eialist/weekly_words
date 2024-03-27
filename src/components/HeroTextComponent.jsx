import { useNavigate } from "react-router-dom";

export const HeroTextComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="frontpage-text-container">
      <div className="d-flex flex-column align-items-start">
        <h1 className="frontpage-text-infotext">Att kunna engelska är kul</h1>
        <p className="frontpage-text-infotext">för alla</p>
        <button
          className="frontpage-text-btn"
          onClick={() => navigate("/info")}>
          Läs mer
        </button>
      </div>
    </div>
  );
};
