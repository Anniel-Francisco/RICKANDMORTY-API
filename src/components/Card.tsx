import PropTypes from "prop-types";
export function Card({id, name, gender, species, status, type, image, origin, location}){
          return (
          <div style={{backgroundColor:'#3c3e44'}} className="flex relative rounded-xl shadow-md shadow-slate-800">
                    <div style={{width:'40px', height:'40px', borderRadius:'50%', color:'#262c3a'}} className="flex justify-center items-center absolute font-bold right-5 top-4 bg-white">
                              {id}
                    </div>
                    <div>
                              <img src={image} alt="image" className="rounded-l-xl h-full" />
                    </div>
                    <div className="p-5 text-white">
                              <div className="flex flex-col">
                              <span className="text-3xl font-bold">{name}</span>
                              <span className="font-semibold">{status} - {species}</span>
                              </div>
                    </div>

          
          </div>);
}

Card.propTypes  ={
          id:PropTypes.number,
          name:PropTypes.string,
          gender: PropTypes.string,
          status: PropTypes.string,
          type: PropTypes.string,
          image: PropTypes.string,
          origin: PropTypes.object,
          location: PropTypes.object
};