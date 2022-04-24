import React from "react";
import {
  Card,
  CardContent,
  InputLabel,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../application/hooks";
import {
  filteredCountyFrom,
  filteredCountyTo,
  resetCounty,
  emptyCounty,
} from "../redux/countyCardSlice";

function CountyFilterCard() {
  const dispatch = useAppDispatch();

  const globalCountyFrom = useAppSelector(
    (state) => state.filterCounty.grantsFrom.value
  );

  const globalCountyTo = useAppSelector(
    (state) => state.filterCounty.grantsTo.value
  );

  const handleCountyFrom = (e: any) => {
    dispatch(filteredCountyFrom(e.target.value));
  };

  const handleCountyTo = (e: any) => {
    dispatch(filteredCountyTo(e.target.value));
  };

  const emptyClick = () => {
    dispatch(emptyCounty());
  };

  const resetClick = () => {
    dispatch(resetCounty());
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          backgroundColor: "pink",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <button onClick={resetClick}>reset</button>
          <button onClick={emptyClick}>clear</button>
          <Typography
            sx={{ fontSize: 16 }}
            fontWeight="bold"
            color="text.secondary"
            gutterBottom
          >
            County Filters
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: 140 }}>
            <InputLabel>Min Grants</InputLabel>
            <Select value={globalCountyFrom} onChange={handleCountyFrom}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={51}>51</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ minWidth: 140 }}>
            <InputLabel>Max Grants</InputLabel>
            <Select value={globalCountyTo} onChange={handleCountyTo}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={51}>51</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
}

export default CountyFilterCard;
