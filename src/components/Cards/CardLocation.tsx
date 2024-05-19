import { useEffect, useState } from "react";
import PropTypes from "prop-types";
//
import { CardResident } from "./CardResident";
//
import LocationI from "../../interfaces/LocationI";
import "../../styles/card-location.css";
//
type PopulationT = {
  name: string;
  image: string;
};
export function CardLocation({
  id,
  name,
  type,
  dimension,
  residents,
}: LocationI) {
  const [population, setPopulation] = useState<Array<PopulationT>>([]);
  const [dropDown, setDropDown] = useState<boolean>(false);
  //
  const getResidents = async (residents: Array<string>) => {
    try {
      const residentsData = await Promise.all(
        residents.map(async (residentUrl: string) => {
          const response = await fetch(residentUrl);
          return await response.json();
        })
      );
      setPopulation(residentsData);
    } catch (error) {
      console.error("Error al obtener datos de residentes:", error);
    }
  };

  const showResidents = (residents: Array<string>) => {
    if (!dropDown) {
      setDropDown(true);
      getResidents(residents);
    } else {
      setDropDown(false);
    }
  };

  useEffect(() => {
    getResidents(residents);
  }, [residents]);

  return (
    <div
      style={{ backgroundColor: "#3c3e44" }}
      className="relative rounded-xl shadow-md shadow-slate-800"
    >
      <div className="flex flex-col w-full p-5 items-center text-white">
        {/* Location details */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span className="text-3xl font-bold">{name}</span>
            <span className="text-lg font-semibold">
              {type} |{" "}
              {!dimension
                ? "Unknown dimension"
                : dimension == "unknown"
                ? "Unknown dimension"
                : dimension}
            </span>
          </div>

          <div
            style={{ width: "35px", height: "35px", color: "#262c3a" }}
            className="flex justify-center items-center  font-bold  bg-white rounded-full"
          >
            <span>{id}</span>
          </div>
        </div>
        {/* Residents */}
        <div className="residents" style={{ width: "100%" }}>
          <button
            type="button"
            className="w-full bg-slate-700 h-10 outline-none rounded-md font-bold"
            onClick={() => showResidents(residents)}
          >
            Residents
          </button>
          <div
            style={{ height: dropDown ? "350px" : "0", width: "100%" }}
            className=" dropdown__content grid pr-1 grid-cols-5 max-md:grid-cols-4 gap-2 mt-2 w-full"
          >
            {population.length > 0 ? population.map((person, index) => {
              return (
                <CardResident
                  key={index}
                  name={person.name}
                  image={person.image}
                />
              );
            }) : <span className="font-semibold text-2xl">No residents</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

CardLocation.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  dimension: PropTypes.string,
  residents: PropTypes.array,
};
