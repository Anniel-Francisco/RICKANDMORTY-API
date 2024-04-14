
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
//
import RickMortyAPI from "../api/RickMortyAPI"
//
import { Paginate } from '../components/Paginate';
import { CardCharacter } from "../components/Cards/CardCharacter";

export default function Characters(){
          const location = useLocation();
          const navigate = useNavigate();
          const [characters, setCharacters] = useState<Array<object>>([]);
          const [info, setInfo] = useState<object>({});
          const [page, setPage] = useState<string>('1');

          const getCharacters = async () =>{
                    try{
                      if(!location.search) location.search=`?page=1`;
                              const {data:{info,results}} = await RickMortyAPI.getCharacters(location.search);
                              setInfo(info);
                              setCharacters(results);
                    }catch(error){
                              console.error(error);
                    }
          }
          const setCurrentPage = () =>{
            const searchParams = new URLSearchParams(location.search);
            setPage(searchParams.get('page') || '');
          };
          
          useEffect(() => {
            getCharacters();
            setCurrentPage();
          },[location.search]);
          
          useEffect(() =>{
            navigate(`${location?.pathname}${location?.search}`);
          },[]);
          return (
                    <div style={{ backgroundColor:"#262c3a", padding:'10px 20px'}} className="flex flex-col min-h-full">
                     <div className="flex justify-center pb-4">
                     <Paginate count={info?.pages} color="primary" page={page} />
                     </div>
                      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
                          {characters.map((character, index) => {
                                    return <CardCharacter
                                    key={index}
                                    id={character.id}
                                    name={character.name}
                                    gender={character.gender}
                                    species={character.species}
                                    status={character.status}
                                    type={character.type}
                                    image={character.image}
                                    origin={character.origin}
                                    location={character.location}
                                    />
                            })}
                      </div>
                    </div>
                  );
}