import PropTypes from "prop-types";
//
import noImage from '/public/no-image.jpg';
//
type ResidentT = {
  name: string;
  image: string;
};
export function CardResident({ name, image }: ResidentT) {
  return (
    <div>
      <img className="rounded-lg" src={image ? image : noImage} alt="no image" />
      <span className="font-semibold text-lg">{name}</span>
    </div>
  );
}

CardResident.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};
