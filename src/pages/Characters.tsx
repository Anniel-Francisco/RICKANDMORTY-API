
import { useEffect, useState } from "react"
//
import CharacterAPI from "../api/CharacterAPI"
//
import { Card } from "../components/Card";
export default function Characters(){
          const [characters, setCharacters] = useState<Array<object>>([]);
          const [info, setInfo] = useState<object>({});
          useEffect(() => {
                    async function fetchCharacters(){
                              try{
                                        const {data:{info,results}} = await CharacterAPI.getCharacters();
                                        setInfo(info);
                                        setCharacters(results);
                              }catch(error){
                                        console.error(error);
                              }
                    }
                    fetchCharacters()
          },[]);

          return (
                    <div style={{ backgroundColor:"#262c3a", padding:'10px 20px'}} className="grid grid-cols-3 max-md:grid-cols-1 gap-4 min-h-full">
                      {characters.map((character, index) => (
                        <Card
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
                      ))}
                    </div>
                  );
}