import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const CTAButtons: React.FC = () => {
  return (
    <div className="cta-buttons" style={{ textAlign: "center", margin: "40px 0" }}>
      <Link to="/login">
        <button style={{ backgroundColor: "#fc284f", color: "#fff", padding: "15px 30px", marginRight: "20px", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "1rem" }}>
          Iniciar Sesión
        </button>
      </Link>
      <Link to="/register">
        <button style={{ backgroundColor: "#ff824a", color: "#fff", padding: "15px 30px", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "1rem" }}>
          Registrarse
        </button>
      </Link>
    </div>
  );
};

export default CTAButtons;