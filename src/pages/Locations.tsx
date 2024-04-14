import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
//
import { Paginate } from '../components/Paginate';

export default function Locations(){
          const location = useLocation();
          const navigate = useNavigate();
          return <div style={{ backgroundColor:"#262c3a", padding:'10px 20px'}} className="grid grid-cols-2 max-md:grid-cols-1 gap-5 min-h-full">



          </div>
}