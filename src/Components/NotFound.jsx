import { useNavigate } from "react-router-dom";

const NotFound = ({ spacings }) => {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div className={`text-center ${spacings}`}>
      <h2 className="text-white">404 - Pagina non trovata</h2>
      <p className="text-white">
        This city was not found. Please try again with a different city{" "}
      </p>
      <button
        id="notfound"
        className="radius-2"
        onClick={() => {
          navigate("/");
        }}
      >
        Torna indietro
      </button>
    </div>
  );
};

export default NotFound;
