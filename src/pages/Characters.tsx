import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//
import RickMortyAPI from "../api/RickMortyAPI";
//
import { Paginate } from "../components/Paginate";
import { CardCharacter } from "../components/Cards/CardCharacter";
//
import CharacterI from "../types/CharacterI";

type PaginationT = {
  page: number;
  count: number;
};
export default function Characters() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<Array<CharacterI>>([]);
  const [pagination, setPagination] = useState<PaginationT>({
    page: 1,
    count: 0,
  });

  useEffect(() => {
    const getCharacters = async () => {
      try {
        if (!location.search) location.search = `?page=1`;
        const {
          data: {
            info: { pages },
            results,
          },
        } = await RickMortyAPI.getCharacters(location.search);
        setPagination({
          ...pagination,
          count: pages,
        });
        setCharacters(results);
      } catch (error) {
        console.error(error);
      }
    };
    const setCurrentPage = () => {
      const searchParams = new URLSearchParams(location.search);
      pagination.page = parseInt(searchParams.get("page") || "");
    };
    //
    getCharacters();
    setCurrentPage();
  }, [location, location.search, pagination]);

  useEffect(() => {
    navigate(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search, navigate]);
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
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
        {characters.map((character, index) => {
          return (
            <CardCharacter
              key={index}
              id={character.id}
              name={character.name}
              gender={character.gender}
              species={character.species}
              status={character.status}
              image={character.image}
              origin={character.origin}
              location={character.location}
            />
          );
        })}
      </div>
    </div>
  );
}
