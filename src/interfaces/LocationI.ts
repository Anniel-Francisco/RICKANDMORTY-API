type ResidentT = {};
interface LocationI{
    id:number;
    name:string;
    type:string;
    dimension:string;
    residents:Array<object>;
}

export default LocationI;