import PropTypes from "prop-types";
export function Card({id, name, gender, species, status, type, image, origin, location}){
          return (
          <div style={{backgroundColor:'#3c3e44'}} className="rounded-xl shadow-md shadow-slate-800">
          
                              <img src={image} alt="image" className="rounded-l-xl" />
          
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