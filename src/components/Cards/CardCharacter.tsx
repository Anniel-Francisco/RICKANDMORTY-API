import PropTypes from "prop-types";
export function CardCharacter({id, name, gender, species, status, type, image, origin, location}){
          return (
          <div style={{backgroundColor:'#3c3e44'}} className="flex relative rounded-xl shadow-md shadow-slate-800">
                    <div style={{width:'35px', height:'35px', color:'#262c3a'}} className="flex justify-center items-center absolute font-bold right-4 bottom-4 bg-white rounded-full">
                              {id}
                    </div>
                    <div>
                              <img src={image} alt="image" className="rounded-l-xl h-full" />
                    </div>
                    <div className="grid grid-cols-1 grid-rows-3 p-5 text-white">
                              <div className="flex flex-col">
                                        <span className="text-3xl font-bold">{name}</span>
                                        <span className="font-semibold">{status} | {species} | {gender}</span>
                              </div>

                              <div className="flex flex-col">
                                        <span style={{color:"#c7c7bd"}} className="font-medium text-base">Last location: </span>
                                        <span className="text-lg">{location.name}</span>
                              </div>

                              <div className="flex flex-col">
                                        <span style={{color:"#c7c7bd"}} className="font-medium text-base">Origin: </span>
                                        <span className="text-lg">{origin.name}</span>
                              </div>
                            
                    </div>
          </div>);
}

CardCharacter.propTypes = {
          id: PropTypes.number,
          name: PropTypes.string,
          gender: PropTypes.string,
          status: PropTypes.string,
          type: PropTypes.string,
          image: PropTypes.string,
          origin: PropTypes.object,
          location: PropTypes.object
};