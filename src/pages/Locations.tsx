import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//
import RickMortyAPI from "../api/RickMortyAPI";
//
import { Paginate } from "../components/Paginate";
import { Location } from "../components/Location";
//
import LocationI from "../interfaces/LocationI";

type PaginationT = {
  page: number;
  count: number;
}
export default function Locations() {
  const location = useLocation();
  const navigate = useNavigate();
  const [locations, setLocations] = useState<Array<LocationI>>([]);
  const [pagination, setPagination] = useState<PaginationT>({
    page: 1,
    count: 0
  });

  const getLocations = async () => {
    try {
      if (!location.search) location.search = `?page=1`;
      const {
        data: {
          info: { pages },
          results,
        },
      } = await RickMortyAPI.getLocations(location.search);
      setPagination({
        ...pagination,
        count: pages
      });
      setLocations(results);
    } catch (error) {
      console.error(error);
    }
  };
  const setCurrentPage = () => {
    const searchParams = new URLSearchParams(location.search);
    pagination.page = parseInt(searchParams.get("page") || "");
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
        <Paginate count={pagination.count} page={pagination.page} />
      </div>
      <div className="grid grid-cols-1 gap-5">
        {locations.map((location, index) => {
          return (
            <Location
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
