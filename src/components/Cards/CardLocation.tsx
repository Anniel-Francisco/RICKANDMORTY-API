import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//
import { CardResident } from "./CardResident";
//

import PropTypes from "prop-types";
export function CardLocation({id, name, type, dimension, residents}){
          const location = useLocation();
          const [population, setPopulation] = useState<Array<object>>([]);
          //
          const getPopulation = async () => {
                    try {
                              const residentsData = await Promise.all(residents.map(async (residentUrl: string) => {
                                const response = await fetch(residentUrl);
                                return await response.json();
                              }));
                              setPopulation(residentsData);
                            } catch (error) {
                              console.error('Error al obtener datos de residentes:', error);
                            }
                        
          };
          useEffect(() => {
                    getPopulation();
          }, [location.search]);
          useEffect(() => {
                    getPopulation(); 
          }, []);
          return (
          <div style={{backgroundColor:'#3c3e44'}} className="relative rounded-xl shadow-md shadow-slate-800">
                    <div style={{width:'35px', height:'35px', color:'#262c3a'}} className="flex justify-center items-center absolute font-bold right-4 top-4 bg-white rounded-full">
                              {id}
                    </div>
                    <div className="grid grid-rows-1 p-5 text-white">
                              <div className="flex flex-col">
                                        <span className="text-3xl font-bold">{name}</span>
                                        <span className="text-lg font-semibold">{type} | { !dimension ? 'Unknown dimension' :  dimension == 'unknown' ? 'Unknown dimension' : dimension }</span>
                              </div>                          
                              <div className="mt-2">
                              <span style={{color:"#c7c7bd"}} className="font-medium  text-base">Residents of Planet:</span>
                              </div>
                              <div className="grid pr-1 pl-1 grid-cols-4 gap-2 mt-2" style={{height:'300px', overflowY: 'scroll',  scrollbarColor:'white transparent',   scrollbarWidth: 'thin'}}>
                                      
                                                  {
                                                            population.map((person, index) => {
                                                                      return (
                                                                                <CardResident
                                                                                key={index}
                                                                                name={person.name}
                                                                                image={person.image}
                                                                                />
                                                                      );
                                                            })
                                                  }
                                      
                              </div>
                              
                    </div>
          </div>
          )
}

CardLocation.propTypes = {
          id: PropTypes.number,
          name: PropTypes.string,
          type: PropTypes.string,
          dimension: PropTypes.string,
          residents: PropTypes.array
};