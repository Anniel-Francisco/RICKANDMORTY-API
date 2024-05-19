import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//
import RickMortyAPI from "../api/RickMortyAPI";
//
import { Paginate } from "../components/Paginate";
import { CardLocation } from "../components/Cards/CardLocation";
//
import LocationI from "../interfaces/LocationI";

export default function Locations() {
  const location = useLocation();
  const navigate = useNavigate();
  const [locations, setLocations] = useState<Array<LocationI>>([]);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<string>("1");

  const getLocations = async () => {
    try {
      if (!location.search) location.search = `?page=1`;
      const {
        data: {
          info: { pages },
          results,
        },
      } = await RickMortyAPI.getLocations(location.search);
      setCount(pages);
      setLocations(results);
    } catch (error) {
      console.error(error);
    }
  };
  const setCurrentPage = () => {
    const searchParams = new URLSearchParams(location.search);
    setPage(searchParams.get("page") || "");
  };

  useEffect(() => {
    getLocations();
    setCurrentPage();
  }, [location.search]);

  useEffect(() => {
    navigate(`${location.pathname}${location.search}`);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#262c3a",
        padding: "10px 20px",
        minHeight: "100vh",
      }}
      className="flex flex-col"
    >
      <div className="flex justify-center pb-4">
        <Paginate count={count} page={page} />
      </div>
      <div className="grid grid-cols-1 gap-5">
        {locations.map((location, index) => {
          return (
            <CardLocation
              key={index}
              id={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents={location.residents}
            />
          );
        })}
      </div>
    </div>
  );
}
