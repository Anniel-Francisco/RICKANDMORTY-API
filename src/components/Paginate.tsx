import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
//
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
//
import PropTypes from "prop-types";

type PaginateT =  {
  count: number;
  page: number;
}

export function Paginate({ count, page }: PaginateT) {
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    replaceQueryString("page", value.toString());
  };
  const replaceQueryString = (param: string, newParamValue: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(param, newParamValue);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  return (
    <Stack className="bg-white p-2 rounded-full" spacing={1}>
      <Pagination
        count={count}
        color="primary"
        showFirstButton
        showLastButton
        page={page ? page : 1}
        onChange={handleChange}
      />
    </Stack>
  );
}

Paginate.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
};
