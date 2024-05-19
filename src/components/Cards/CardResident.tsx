import PropTypes from "prop-types";
//
type ResidentT = {
  name: string;
  image: string;
};
export function CardResident({ name, image }: ResidentT) {
  return (
    <div>
      <img className="rounded-lg" src={image} alt="" />
      <span className="font-semibold">{name}</span>
    </div>
  );
}

CardResident.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};
