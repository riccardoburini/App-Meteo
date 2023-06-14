import { Col, Card, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Loading from "./Loading";

const DetailsSearchCard = () => {
  const params = useParams();

  const [specificCity, setSpecificCity] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchSpecificCity = async () => {
      try {
        let res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${params.meteo}&units=imperial&appid=f8613aec782bf7afa7418191249bf4f8`
        );
        if (res.ok) {
          console.log(res);
          let data = await res.json();
          setSpecificCity(data);
          setIsLoading(false);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchSpecificCity();
  }, [params.meteo]);

  return (
    <>
      {isLoading && <Loading />}
      {isError ? (
        <NotFound />
      ) : (
        <Row id="specific" className="w-100 justify-content-center mt-5">
          <Col xs={9}>
            <table className="table">
              <thead>
                <tr class="last1">
                  <th>
                    <Card.Title>
                      Weather in {specificCity.name} {specificCity.sys?.country}
                    </Card.Title>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Temperature</td>
                  <td>
                    {(((specificCity.main?.temp - 32) * 5) / 9).toFixed()}° C
                  </td>
                </tr>
                <tr>
                  <td>Sky Condition</td>
                  <td>
                    {specificCity.weather?.length > 0 &&
                      specificCity.weather[0].main}
                  </td>
                </tr>
                <tr>
                  <td>Pressure</td>
                  <td>{specificCity.main?.pressure} hPa</td>
                </tr>
                <tr>
                  <td>Humidity</td>
                  <td>{specificCity.main?.humidity} %</td>
                </tr>
                <tr>
                  <td>Wind Speed</td>
                  <td>{specificCity.wind?.speed} m/s</td>
                </tr>
                <tr>
                  <td>Longitudine</td>
                  <td>{specificCity.coord?.lon}°</td>
                </tr>
                <tr class="last">
                  <td>Latituidine</td>
                  <td>{specificCity.coord?.lat}° </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      )}
    </>
  );
};

export default DetailsSearchCard;
