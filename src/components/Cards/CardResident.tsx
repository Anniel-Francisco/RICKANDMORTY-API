import PropTypes from "prop-types";
//
export function CardResident({name, image}){
          return (
                    <div>
                              <img className="rounded-lg" src={image} alt="" />
                              <span className="font-semibold">{name}</span>
                    </div>
          );
}

CardResident.propTypes = {
          name: PropTypes.string,
          image: PropTypes.string
}