import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DetailsSearchCard from "./DetailsSearchCard";
import Loading from "./Loading";

import NotFound from "./NotFound";

const MainCityCard = ({ city }) => {
  const [meteo, setMeteo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchByWeatherApi = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f8613aec782bf7afa7418191249bf4f8`
        );
        if (res.ok) {
          let data = await res.json();
          setMeteo(data);
          setIsLoading(false);
        } else {
          console.log("there was an error");
          <NotFound />;
        }
      } catch (error) {
        console.log(error, "error");
        <NotFound />;
      }
    };
    fetchByWeatherApi();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {isError ? (
        <NotFound />
      ) : (
        <Link to={`/Specific/${meteo.name}`}>
          <Container
            id="card"
            onClick={() => {
              DetailsSearchCard(meteo);
              console.log("clicked", meteo);
            }}
          >
            <h3 className="d-flex align-items-center mt-2">{meteo.name}</h3>
            <p className="d-flex align-items-center ">{meteo.sys?.country}</p>
            <Container className="align-items-end d-flex flex-column ">
              <p id="temp">
                {(((meteo.main?.temp - 32) * 5) / 9).toFixed()}° C
              </p>
              <p id="description">
                {meteo.weather?.length > 0 && meteo.weather[0].main}
              </p>
            </Container>
          </Container>
        </Link>
      )}{" "}
    </>
  );
};
export default MainCityCard;
