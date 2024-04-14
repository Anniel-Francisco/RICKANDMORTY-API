import * as React from 'react';
import { useLocation, useNavigate  } from "react-router-dom";
//
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
//
import PropTypes from "prop-types";

export function Paginate({count, color, page}){
        const location = useLocation();
        const navigate = useNavigate();
        const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
          replaceQueryString('page', value.toString());
        };
        const replaceQueryString = (param: string, newParamValue: string) => {
            const searchParams = new URLSearchParams(location.search);
            searchParams.set(param, newParamValue);
            navigate(`${location.pathname}?${searchParams.toString()}`);
        };
          return <Stack className='bg-white p-2 rounded-full' spacing={1}>
                    <Pagination count={count} color={color} showFirstButton showLastButton page={page ? parseInt(page) : 1} onChange={handleChange}  /> 
                 </Stack>    
}

Paginate.propTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
  page: PropTypes.string
};