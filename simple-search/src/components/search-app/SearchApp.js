import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import AdsService from "../../service/AdsService";
import SingleAd from "../ad-list/SingleAd";
import { useSearchParams } from "react-router-dom";
const SearchApp = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const loadData = () => {
    const query = searchParams.toString();

    AdsService.getAllAds(query ? `?${query}` : "").then((res) => {
      setData(res?.data?.data);
    });
  };

  useEffect(() => {
    loadData();
  }, [searchParams]);

  const handleSearch = (e) => {
    const { value } = e.target;
    if (value?.length > 2) {
      searchParams.set("q", value);
    } else {
      searchParams.delete("q");
    }
    setSearchParams(searchParams);
  };

  console.log(data);
  return (
    <>
      <Grid container justifyContent="center" alignItems="center" p={3}>
        <TextField
          type="search"
          size="small"
          placeholder="Search with minimum 3 characters, you can search Ad/Company/Description/Title/url..."
          fullWidth
          onChange={handleSearch}
        />
      </Grid>
      <Grid container display="flex" flexWrap="wrap" p={3}>
        {Array.isArray(data) &&
          data.map((v, i) => {
            return (
              <Grid item sm={12} md={4}>
                <SingleAd {...v} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default SearchApp;
