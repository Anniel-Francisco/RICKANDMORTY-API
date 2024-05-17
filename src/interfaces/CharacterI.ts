type OriginT = {
  name: string;
}
type LocationT = {
  name: string;
}
interface CharacterI {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
  origin: OriginT;
  location: LocationT;
}

export default CharacterI;
